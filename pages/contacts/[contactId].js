 import Layout from "../../components/Layout";
import { useRouter } from 'next/router';
import contacts from "../api/contacts";
import Link from "next/link";

export default function Contact() {
    const router = useRouter();
    const { contactId } = router.query;
    // debugger
    const details = contacts.find(details => details.id === contactId);
    const [first, last] = details?.name.split(" ");
    console.log(details);

    return (
       
        <Layout> 
            <Link href="#" onClick={() => router.back()}><button>back</button></Link>
            <h1> details : {last.toUpperCase()}, {first }</h1>
            <h1> {details.name} </h1>
            <h1> {details.country}</h1>
        </Layout>

    )
}

//dynamic routing