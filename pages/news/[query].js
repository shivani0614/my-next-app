import Layout from "../../components/Layout";
import { search } from "../api";

export default function News({ results,query }) {
  return (
    <Layout>
      <h1>Search: {query} </h1>
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
export async function getServerSideProps({ params }) {
  // The value of the `props` key will be
  //  passed to the `Home` component
  const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${API_KEY}`;
  const results = await search(URL);
  return {
    props: { 
      results,
      query : params.query
     },
  };
}

/**
 * 
 query topics for : 
 1. health
 2. education **/

/**
  how to get api  from new york times - 
  1. click - https://developer.nytimes.com/apis
  2. search for Top Stories API
  3. click on download spec .
  4. see example calls and copy the URL
  5. 
**/
