import { Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <img
          src="/textalchemy_logo.png"
          alt="Next.js Logo"
          style={{
            height: "4rem",
            width: "15rem",
          }}
          className="h-6 mr-2"
        />

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/textarea"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Playground
            </p>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Typography variant="h1" className="text-5xl font-bold text-center">
          TextAlchemy: AI Text Transformation Playground🪄
        </Typography>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-8">
        <a
          className="group rounded-lg border  px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Real-time Results{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Get instant AI-powered text transformations.
          </p>
        </a>

        <a
          className="group rounded-lg border  px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Style Selector{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Choose from multiple styles like Humor, Angry, Flirty, Casual, or
            Shakespearean.
          </p>
        </a>

        <a
          className="group rounded-lg border  px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            API Integration{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Leverages Google Gemini or other advanced AI APIs for dynamic text
            transformations
          </p>
        </a>

        <a
          className="group rounded-lg border  px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Interactive Output{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Neatly formatted styled text options to fit your need
          </p>
        </a>
      </div>
    </main>
  );
}
