import Layout from "@/components/Layout";
import Head from "next/head";
import { handler } from "../api";

// for next js HEAD component is very important for SEO,It allows
// to create rich and azure friendly content
function Posts({ results, title }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{title}</h1>
        <ul>
          {results?.map((result) => (
          
            <li>

              <a href={result.url} rel="noreferrer nofollower" target="_blank">
                {result.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ";

export async function getStaticPaths() {
  const results = await handler(
    `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`
  );

  return {
    paths: results.map((result) => {
      return {
        params: {
          section: result.section,
        },
      };
    }),
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const results = await handler(
    `https://api.nytimes.com/svc/news/v3/content/nyt/${params.section}.json?api-key=${API_KEY}`
  );

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      results,
      title: params.section,
    },
  };
}
export default Posts;
