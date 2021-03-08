## Back End

I used my old WordPress portfolio as the GraphQL endpoint. It was easier for me than rewriting/formatting the articles I have written. 

For the front page, it uses StaticProps because it's faster and I do not need to update it frequently. For the posts and portfolio, I use dynamic fetching, because I am still shaping the pages, so it's easier for me to update them quickly. Once I am content, I will switch to StaticProps because it will improve the speed of loading. 

## Front End

I use NextJS - I created a new app with create-nextjs-app and simply coded what I needed. I also used TailwindCSS as my CSS framework of choice - it was the first time I fully trusted a framework that isn't Bootstrap and I don't regret it. Not looking back now!

## Deployment

The website is deployed on Vercel. I have deployed to other platforms before but Vercel has been the most supportive and easy to deploy to. Especially in terms of NextJS. 
