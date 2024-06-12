import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Homolosine from "../components/Homolosine/Homolosine";
import HorizontalRule from "../components/HorizontalRule/HorizontalRule";

function Home() {
  return (
    <>
      <section className="h-screen bg-white dark:bg-neutral-950 dark:text-white flex flex-col">
        <Header />
        <section className="mt-[4rem] w-[90vw] sm:w-[600px] mx-auto flex-grow">
          <Homolosine />
          <h1>Hello</h1>
          <section>
            <p>
              My name is Baird, and I'm a climate scientist who likes to make
              things.
            </p>
            <p>
              I've been bouncing among climate research, academic editing, and
              energy nonprofit work for the past 15 years, and I've used a lot
              of Python in the process.
            </p>
            <p>
              I'd like to start trying my hand at more climate data journalism
              online, and I've realized my lack of front- and backend skills
              were holding me back. I've also felt some impostor syndrome about
              all of this; careers for PhD scientists in the journalism and data
              viz space seem pretty rare! And the work that people do out there
              is already so impressive. It's hard to know where to start.
            </p>
            <p>
              But I'm trying to change my comfort level with it all. I've
              decided to build this blog from scratch and teach myself some
              things, and document it along the way. (And this is about the
              tenth time I've told myself I'd do this.)
            </p>
            <p>
              Here are some of my <a href="" target="_blank">favorite resources</a> in climate and data journalism.
            </p>
            <HorizontalRule />
            <h1>Site design</h1>
            <p>
              I've built this site using React and Tailwind CSS. I find them
              suprisingly fun to use, and with some HTML, CSS, and JavaScript
              under my belt, I was able to learn them in a couple days. I'm
              pretty picky about how a site looks, and I think Tailwind CSS is a
              really great tool if you want a ton of control but still need some
              order in your CSS. If you like this and feel like borrowing from
              it, you can access the GitHub repo for the site in the footer
              below. All the fonts are Google Fonts:
            </p>
            <p>
              <ul>
                <li>
                  The serif font I use in text like this is{" "}
                  <a href="https://fonts.google.com/specimen/Domine">Domine</a>
                </li>
                <li>
                  The sans serif font is{" "}
                  <a
                    href="https://fonts.google.com/specimen/Roboto"
                    className="font-sans"
                  >
                    Roboto
                  </a>
                </li>
                <li>
                  The monospace font (where <code>code is written</code>) is{" "}
                  <a
                    href="https://fonts.google.com/specimen/Roboto+Mono"
                    className="font-monospace"
                  >
                    Roboto Mono
                  </a>
                </li>
              </ul>
            </p>
            <p>Thanks for reading this! More soon.</p>
          </section>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default Home;
