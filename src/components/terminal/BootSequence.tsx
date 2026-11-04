"use client";

import { useEffect, useState } from "react";
import { bootMessages } from "@/data/boot";
import { motion } from "framer-motion";


export default function BootSequence() {

  const [lines, setLines] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);
  const [skip, setSkip] = useState(false);


  useEffect(() => {

    let index = 0;
    let timer: NodeJS.Timeout;


    const runBoot = () => {


      if (index >= bootMessages.length) {

        timer = setTimeout(() => {
          setFinished(true);
        }, 1000);

        return;

      }


      const currentMessage = bootMessages[index];


      timer = setTimeout(() => {


        setLines(prev => [
          ...prev,
          currentMessage.text
        ]);


        index++;

        runBoot();


      }, currentMessage.delay);


    };


    runBoot();


    return () => {
      clearTimeout(timer);
    };


  }, []);



  const handleSkip = () => {

    setSkip(true);

    setTimeout(() => {

      setFinished(true);

    }, 300);

  };



  if (finished) {
    return null;
  }



  return (

    <motion.div

      initial={{
        opacity: 0
      }}

      animate={{
        opacity: skip ? 0 : 1
      }}

      transition={{
        duration: 0.3
      }}

      className="
        fixed
        inset-0
        z-50

        bg-black

        flex
        items-center
        justify-center

        font-mono
      "

    >


      <motion.div

        initial={{
          scale:0.9,
          opacity:0
        }}

        animate={{
          scale:1,
          opacity:1
        }}

        className="
          w-[600px]

          p-8

          border
          border-cyan-400/40

          rounded-xl

          bg-black

          shadow-[0_0_40px_rgba(0,245,255,.3)]
        "

      >


        <div
          className="
            text-cyan-400
            mb-5
          "
        >

          salim@ascii-os:~

        </div>



        {
          lines.map((line, i) => (

            <motion.p

              key={i}

              initial={{
                opacity:0,
                x:-10
              }}

              animate={{
                opacity:1,
                x:0
              }}

              transition={{
                duration:0.3
              }}

              className={`
                ${
                  line.toLowerCase().includes("ready")
                  ?
                  "text-purple-400"
                  :
                  "text-gray-300"
                }

                mb-2
              `}

            >

              {">"} {line}

            </motion.p>

          ))
        }



        <span
          className="
            animate-pulse
            text-cyan-400
          "
        >

          _

        </span>



      </motion.div>



      <button

        onClick={handleSkip}

        className="
          absolute
          bottom-10
          right-10

          border
          border-purple-500

          px-4
          py-2

          rounded-lg

          text-purple-400

          hover:bg-purple-500
          hover:text-black

          transition
        "

      >

        Skip Boot

      </button>



    </motion.div>

  );

}