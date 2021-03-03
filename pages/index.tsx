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
       {contentRequested ? <Article onClose={resetState} articleContent={content} /> : false}
      <Head>
        <title>Dominik Zaczek - Front-End Developer with UX/UI experience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo />
      <h2>Dominik Zaczek: Front-End Developer with Back-End and UX/UI Experience</h2>
      <h2 className="text-4xl font-semibold mt-20 mb-10">Projects</h2>
      <div className="flex px-4 flex-row flex-wrap">
        {portfolio.map(function(portfolio){
          return <PortfolioButton onClick={() => showPortfolio(portfolio.pageId)} imageSource={portfolio.featuredImage.node.mediaItemUrl} portfolioId={portfolio.slug}/>
          
        })}
      </div>
      <div className="container">
      <div className="grid grid-cols-2 gap-4">
      <div className="p-5 prose">
      <h2 className="text-4xl font-semibold mt-10 mb-10">Something to be proud of</h2>
      <p className="italic tracking-wide mb-5">It has been a pleasure to have our websites taken care by Dominik. 
Dominik demonstrated a great deal of commitment and understanding of our company’s needs. 
Dominik’s creative input and technical knowledge were both inspiring and enhancing of our digital endeavours.
Dominik excelled helping us installing and managing WordPress, hardening security of our websites and dealing with selecting and installing the most advanced plugins for our websites. 
The beautiful logo of our <a href="http://pianistaid.com">pianistaid.com</a> website will accompany us for the years to come.
In a nutshell, I strongly recommend Dominik and his services to any individual or company seeking to delegate the management and maintenance of their websites.
As director of WKMT ltd. I remain reachable via e-mail for any further referral needed.</p>
Juan Rezzuto, CEO of <a href="http://wkmt.co.uk">WKMT</a>
      </div>
      <div className="p-5 prose dark">
      <h2 className="text-4xl font-semibold mt-10 mb-10">Articles</h2>
      {
        articles.map(function(article){
          return <h4>{article.title}</h4>
        })
      }
      </div>
      </div>
      </div>
    </div>
  )
}

export async function getStaticProps(){
  const client = new ApolloClient({
    uri: 'https://rare.dominikbrendan.com/graphql',
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