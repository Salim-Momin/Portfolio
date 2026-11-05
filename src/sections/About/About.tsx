"use client";


import {motion} from "framer-motion";

import ProfileCard from "./ProfileCard";


export default function About(){


return(

<section

id="about"

className="
min-h-screen

py-24

px-6

"

>


<div

className="
max-w-6xl

mx-auto

"

>


<motion.h2

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

className="
text-4xl

font-bold

text-cyan-400

font-mono

mb-10

"

>

$ cat about.txt

</motion.h2>



<ProfileCard/>


</div>


</section>

)

}