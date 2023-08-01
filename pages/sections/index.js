import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { handler } from "../api";

// for next js HEAD component is very important for SEO,It allows
// to create rich and azure friendly content
function Sections({ results, title }) {
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
                
              *<Link href={`sections/${result.section}`} rel="noreferrer nofollower">
                {result.display_name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ";
export async function getStaticProps({ params }) {
  const SECTIONS_URL = `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`;
  //https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ
  // The value of the `props` key will be
  //  passed to the `Home` component

  return {
    props: {
      results: await handler(SECTIONS_URL),
      title: "Sections",
    },
  };
}

export default Sections;
