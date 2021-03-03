import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {useState} from 'react'
import "tailwindcss/tailwind.css"
import PortfolioButton from '../components/PortfolioButton.js';
import Article from '../components/Article.js'
import Logo from '../components/logo.js'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Image from 'next/image'


export default function Home({articles, portfolio}) {
  //states
  const [content, setContent] = useState(null)
  const [contentRequested, setContentRequested] = useState(false)

  //Overlay Component
  //functions
 async function showPortfolio(props){
   setContentRequested(true)
    const fetchContent = await fetch('/api/contentHandle',{
      method: 'post',
      body: props
    });
    console.log("fetched")
    const article = await fetchContent.text();
    setContent(article)
  } 
  function resetState(){
    console.log("Resetting state")
    setContentRequested(false)
    setContent(null)
  }
  //return
  return (
    <div className={styles.container}>
      <Head>
        <title>Dominik Zaczek - Front-End Developer with UX/UI experience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {contentRequested ? <Article onClose={resetState} articleContent={content} /> : false}
      <Logo />
      <h2>Dominik Zaczek: Front-End Developer with Back-End and UX/UI Experience</h2>
      <h2 className="text-4xl font-semibold mt-20 mb-10">Projects</h2>
      <div className="flex px-4 flex-row flex-wrap">
        {portfolio.map(function(portfolio){
          return <PortfolioButton onClick={() => showPortfolio(portfolio.pageId)} imageSource={portfolio.featuredImage.node.mediaItemUrl} portfolioId={portfolio.slug}/>
          
        })}
      </div>
      <h2 className="text-4xl font-semibold mt-10 mb-10">Articles</h2>
      {
        articles.map(function(article){
          return <h3>{article.title}</h3>
        })
      }
    </div>
  )
}

export async function getStaticProps(){
  const client = new ApolloClient({
    uri: 'http://rare.dominikbrendan.com/graphql',
    cache: new InMemoryCache()
  });
  const { data } = await client.query<{posts: {nodes: []}, pages: {nodes: []}}>({
    query: gql`
    query {
      pages(where: {parent: 565}) {
        nodes {
          title
          pageId
          slug
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
      posts(where: {categoryName: "Articles"}) {
        nodes {
          title
          slug
          postId
        }
      }
    }
    `
  });
    return{
      props: {
        articles: data.posts.nodes,
        portfolio: data.pages.nodes
      }
    }
}