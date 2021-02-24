import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Logo from '../components/logo.js'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import {useState} from 'react';
import Image from 'next/image'


export default function Home(results) {
  console.log(results)
  return (
    <div className={styles.container}>
      <Head>
        <title>Dominik Zaczek - Front-End Developer with UX/UI experience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Logo />
      <h2>Dominik Zaczek: Front-End Developer with Back-End and UX/UI Experience</h2>
      <h3>Projects</h3>
      <ul>
        <li><b>New Music Institute:</b> Full-Stack (HTML, CSS, JS, ExpressJS, ReactJS, Heroku)</li>
        <li><b>Glendower Parents' Association:</b> Front-End (HTML, CSS, JS) </li>
        <li><b>TutorUp (concept):</b> Full-Stack (Firebase + ReactJS)</li>
        <li><b>This Portfolio:</b> Full-Stack (HTML, CSS, JS, NextJS, Material UI, Vercel)</li>
      </ul>
      <h3>Articles</h3>
      <ul>
        <li>
          <a href="https://www.linkedin.com/pulse/how-web-development-music-composition-support-each-other-zaczek/">How web development and music composition support each other (LinkedIn)</a>
        </li>
      </ul>
    </div>
  )
}

export async function getStaticProps(){
  const client = new ApolloClient({
    uri: 'http://rare.dominikbrendan.com/graphql',
    cache: new InMemoryCache()
  });
  const { data } = await client.query({
    query: gql`
    query {
      posts(where: {categoryName: "Articles"}) {
        nodes {
          title
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
    
    
    `
  });
    return{
      props: {
        data: data.posts.nodes
      }
    }
}