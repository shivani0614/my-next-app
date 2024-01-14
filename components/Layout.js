import Link from "next/link";
// import styles from "../styles/Home.module.css";
import styles from "../styles/Layout.module.css";
import {useRouter} from "next/router";
//import contacts from "../api/contacts";
/* menu component Here */

// export const contactData = contacts
function Menu() {
  return (
    <ul>
      <h2>
        <Link href="/">
          Home
        </Link>
        &nbsp;
        {/* <Link href="/contacts"><button>Contacts</button></Link> */}
      </h2>
    </ul>
  );
}

export default function Layout({ children }) {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Top Stories",
      path: "/news/path/top-stories",
    },
    {
      title: "Popular",
      path: "/news/path/popular",
    },
  ];
  // console.log(children)
  const router = useRouter();
  return (
    <div className={styles.container}>
      {/*insert Menu here*/}
      <Menu></Menu><br></br>
      {links.map((link) => {
        const className = link.path === router.asPath ? styles.active : styles.link
        return (
          <Link href={link.path}>
            {link.title} {" "} 
          </Link>
        );
      })}
      {children}
    </div>
  );
}
