import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function FavoriteResources() {
  return (
    <>
      <section className="h-screen bg-white dark:bg-neutral-950 dark:text-white flex flex-col">
        <Header />
        <section className="mt-[4rem] w-[90vw] sm:w-[600px] mx-auto flex-grow">
          <h1>favorite resources</h1>
          <section>
            <p>Wash Po</p>
            <p>NYT</p>
            <p>ClimateCentral</p>
            <p>Axios</p>
            <p>Bloomberg</p>
            <p>Wash Po</p>
            <p>NYT</p>
            <p>ClimateCentral</p>
            <p>Axios</p>
            <p>Bloomberg</p>
            <p>Wash Po</p>
            <p>NYT</p>
            <p>ClimateCentral</p>
            <p>Axios</p>
            <p>Bloomberg</p>
            <p>Wash Po</p>
            <p>NYT</p>
            <p>ClimateCentral</p>
            <p>Axios</p>
            <p>Bloomberg</p>
          </section>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default FavoriteResources;
