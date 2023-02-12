import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Pranav: NextPage = () => {
        const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
          <main className="">
              <h1> This is Pranav's page</h1>
          </main>
      <Link href="/">
              <p className="text-slate-400">"Go to homepage"</p>
          </Link></>
  );
};

export default Pranav;
