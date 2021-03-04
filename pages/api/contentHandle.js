import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.GRAPHQL_ENDPOINT,
    cache: new InMemoryCache()
  });
export default async(req, res) => {
    const type = req.headers.type
    const id = req.body
    const queryPortfolio = gql`
    query{
      ${type === 'portfolio' ? 'page' : 'post'}(id: ${id}, idType: DATABASE_ID) 
      {
        content
      }
      }
    ` 

    try{
        const {data} = await client.query({
            query: queryPortfolio
        });
        // console.log(data.pages.nodes[0])
        {type === 'portfolio' ? res.status(200).send(data.page.content) : res.status(200).send(data.post.content)}
    } catch(error){
        res.status(500).send(error)
    }
}