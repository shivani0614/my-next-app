import Layout from "../components/Layout";
import Image from "next/image";
import gif from "../public/not-found.gif";
export default function NotFound(){
    return(
        <Layout>
            <h1>not found</h1>
            <Image src={gif} alt="not found"/>
            <style jsx>
                {`
                 h1{
                    color: chocolate;
                    visibility: hidden;
                
                 }
                `}
                
            </style>
            {/* visibility : hidden is for not be avvailable in source code */}
        </Layout>
        
    )
}