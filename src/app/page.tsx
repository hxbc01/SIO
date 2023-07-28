import type { NextPage } from "next";
import Navbar from "components/navbar";
import Corousel from "components/corousel";
import Card from "components/card";

const home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Corousel />
      <Card />
    </>
  );
}

export default home;
