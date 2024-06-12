import React from "react";

function Footer() {
  return (
    <>
      <footer id="footer" className="py-[1.25rem] bg-neutral-100 w-screen">
        <nav className="max-w-[90vw] md:max-w-[700px] mx-auto flex justify-between items-center">
          <span className="sm:text-sm text-xs">
            by{" "}
            <a
              className="underline"
              href="https://bairdlangenbrunner.com/"
              target="_blank"
            >
              Baird Langenbrunner
            </a>
          </span>
          <span className="sm:text-sm text-xs">
            this site is maintained on github{" "}
            <a
              className="underline"
              href="https://github.com/bairdlangenbrunner"
              target="_blank"
            >
              here
            </a>
          </span>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
