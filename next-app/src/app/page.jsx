"use client";

import Image from 'next/image'
import { Comp } from "../components/Comp";
import { useCallback, useEffect, useState } from 'react';

const CONTENT_DATA = [
  {
    name: "Docs", 
    content: "Find in-depth information about Next.js features and API."
  },
  {
    name: "Learn", 
    content: "Learn about Next.js in an interactive course with&nbsp;quizzes!"
  },
  {
    name: "Templates", 
    content: "Explore the Next.js 13 playground."
  },
  {
    name: "Deploy", 
    content: "Instantly deploy your Next.js site to a shareable URL with Vercel."
  },
];

const useCounter = () => {
  const [Count, setCount] = useState(2);
  const [array, setArray] = useState([3]);

  const handleClick  = useCallback( (e) => {
    console.log(Count);
    setCount((Count) => Count + 1);
  },[]);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      return [...prevArray, prevArray.length + 1];
    });
  }, []);

  return {Count, array, handleClick, handleAdd};
};

const useInputArray = () => {

  const [text, setText] = useState("aaa");
  const [isShow, setIsShow] = useState(true);

  const handleInput = useCallback((e) => {
    setText(e.target.value)
  }, []);

  const handleShow = useCallback(() => {
    setIsShow((isShow) => { return !isShow});
  }, []);

  return {text, isShow, handleInput, handleShow};
};


export default function Home() {

  const {Count, array, handleClick, handleAdd} = useCounter();
  const {text, isShow, handleInput, handleShow} = useInputArray();

  const style = "text-black";

  // マウント時のイベント
  useEffect(() => {
    console.log("aaa");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "lightblue";
    }    
  }, [Count])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      {isShow ? <h2>{Count}</h2> : null}
      <button onClick={handleClick}>クリックしてください</button>
      <button onClick={handleAdd}>Click</button>
      <button 
        onClick={handleShow}
      >{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleInput} className={style} />
      <ul>
        {array.map(item => {
          return(
            <li key={item}>{item}</li>
          )
        })}
      </ul>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

        {CONTENT_DATA.map((value) => (
          <Comp name={value.name} content={value.content} />
        ))}

      </div>
    </main>
  )
}
