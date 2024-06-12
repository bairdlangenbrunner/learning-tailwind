import React from "react";
// import '../../index.css'

function Header() {
  return (
    <>
      <header
        id="header"
        className="bg-neutral-950 text-white fixed z-10 w-screen top-0 py-1"
      >
        <section className="max-w-[90vw] md:max-w-[700px] mx-auto flex justify-between items-center">
          <text className="text-lg">
            <a href="../src/index.html">is this interesting?</a>
          </text>
          {/* <!-- <button id="mobile-open-button" class="text-lg sm:hidden"> */}
          {/* ☰ */}
          {/* </button> --> */}
          {/* <!-- <nav class="hidden sm:block sm:space-x-2 text-lg" aria-label="main"> --> */}
          <nav className="space-x-3 text-lg" aria-label="main">
            <a href="../src/index.html">about</a>
            <a href="../src/index.html">archive</a>
          </nav>
        </section>
      </header>
    </>
  );
}

export default Header;
