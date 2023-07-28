import Link from "next/link";
import styles from '../styles/Home.module.css'
//import contacts from "../api/contacts";
/* menu component Here */

// export const contactData = contacts
function Menu(){
    return(
        <ul>
            <h2>
            <Link href="/"><button>Home</button></Link>&nbsp;
            {/* <Link href="/contacts"><button>Contacts</button></Link> */}
            </h2> 
        </ul>
    )
}

export default function Layout({children}){
    // console.log(children)
    return(
        <div className={styles.container}>
            {/*insert Menu here*/}
            <Menu></Menu>
            {children}
        </div>
    )
}