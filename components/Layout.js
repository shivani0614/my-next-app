import Link from "next/link";
import styles from "../styles/Home.module.css";
//import contacts from "../api/contacts";
/* menu component Here */

// export const contactData = contacts
function Menu() {
  return (
    <ul>
      <h2>
        <Link href="/">
          <button>Home</button>
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
  return (
    <div className={styles.container}>
      {/*insert Menu here*/}
      <Menu></Menu><br></br>
      {links.map((link) => {
        return (
          <Link href={link.path}>
            <button>{link.title} {" "} </button>
          </Link>
        );
      })}
      {children}
    </div>
  );
}
