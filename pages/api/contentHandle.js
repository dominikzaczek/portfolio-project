import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://rare.dominikbrendan.com/graphql',
    cache: new InMemoryCache()
  });
export default async(req, res) => {
    const id = req.body.id
    try{
        const {data} = await client.query({
            query: gql`
                query{
                    pages(where: {id: ${id}}) {
                      nodes {
                        content
                      }
                    }
                  }
            `
        });
        console.log(data.pages.nodes)
        res.status(200).send(data.pages.nodes[0].content)
    } catch(error){
        alert(error)
    }
}