import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

export default function Article(props){
    return(
        <div className="transition duration-500 w-full h-full fixed block overflow-auto overscroll-auto top-0 left-0 bg-black z-50 article-content pt-20 transition">
         <svg xmlns="http://www.w3.org/2000/svg" className="fixed top-5 right-5 w-10 h-10 cursor-pointer hover:aquamarine" onClick={props.onClose} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
          {props.articleContent ? <div className="container mx-auto md:w-1/2 sm:w-4/5 prose" dangerouslySetInnerHTML={{__html:props.articleContent}} /> : 
          <div className="w-full h-full"><img src="logo2.png" className="h-20 w-25 absolute left-1/2 animate-bounce" /></div>
           }
            
        </div>
    )
}