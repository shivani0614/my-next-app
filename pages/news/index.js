import Layout from "../../components/Layout";
import { handler } from "../api";

export default function News({ results }) {
  return (
    <Layout>
      <h1>Top Stories</h1>
      <ul>
        {results.map((result) => {
          return (
            <li key={result.uri}>
              <a href={result.url} target="_blank" rel="noopener norefferer">
                {result.title}
              </a>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ";
export async function getStaticProps() {
  const results = await handler(
    `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
  );
  return {
    props: {
      results,
    },
  };
}

// const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ";
// export async function getStaticProps() {
//   const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;

//   const response = await fetch(URL);

//   const data = await response.json();
//   // console.log("data with",data)
//   console.log("data.results",data.results);

//   // The value of the `props` key will be
//   //  passed to the `Home` component
//   return {
//     props: {
//       results: data.results,
//     },
//   };
// }

/**
  how to get api  from new york times - 
  1. click - https://developer.nytimes.com/apis
  2. search for Top Stories API
  3. click on download spec .
  4. see example calls and copy the URL
  5. 
**/
