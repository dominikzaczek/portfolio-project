import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

export default function Article({article}){
    return(
        <div>
            {article}
        </div>
    )
}

// const querii = `
// query($slug: String!){
//   pages(where: {$slug}) {
//     nodes {
//       content
//     }
//   }
// }
// `
export async function getStaticProps({params}){
    console.log(params.slug)
    const client = new ApolloClient({
      uri: 'http://rare.dominikbrendan.com/graphql',
      cache: new InMemoryCache()
    });
    const { data } = useQuery(querii, {
      variables: {
        slug: params.slug
      }
    })
    console.log(data)
      return{
        props: {
          article: '123',
        }
      }
  }

  export async function getStaticPaths() {
  
    return {
      paths: ['/new-music-institute-enhance-your-home-tuition-with-netflix-like-experience'],
      fallback: true,
    }
  }