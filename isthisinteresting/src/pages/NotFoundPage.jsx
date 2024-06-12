import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function NotFoundPage() {
  return (
    <>
      <section className="h-screen bg-white dark:bg-neutral-950 dark:text-white flex flex-col">
        <Header />
        <section className="mt-[4rem] w-[90vw] sm:w-[600px] mx-auto flex-grow">
          <h1>oops</h1>
          <p>my bad : (</p>
          <p>this page doesn't seem to exist</p>
        </section>
      <Footer />
      </section>
    </>
  );
}

export default NotFoundPage;
