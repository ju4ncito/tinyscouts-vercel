import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <div className="bg-green-200 h-screen">
      <Head>
        <title>Tiny Scouts NFT</title>
      </Head>
      <Navbar/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}
