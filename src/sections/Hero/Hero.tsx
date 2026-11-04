"use client";


import {motion} from "framer-motion";

import AsciiLogo from "./AsciiLogo";

import HeroButtons from "./HeroButtons";

import CyberOrb from "@/components/effects/CyberOrb";



export default function Hero(){


return (

<section

className="

min-h-screen

flex

items-center

px-6

relative

overflow-hidden

"

>


<div

className="

max-w-7xl

mx-auto

grid

md:grid-cols-2

gap-10

items-center

w-full

"

>



<motion.div

initial={{

opacity:0,

x:-50

}}

animate={{

opacity:1,

x:0

}}

transition={{

duration:0.8

}}

>


<AsciiLogo/>



<h1

className="

mt-8

text-5xl

md:text-7xl

font-bold

"

>

Salim Momin

</h1>



<h2

className="

mt-4

text-xl

md:text-3xl

text-cyan-400

"

>

Full Stack Developer

<br/>

<span className="text-purple-400">

AI Engineer

</span>


</h2>



<p

className="

mt-6

text-gray-400

max-w-lg

"

>

I build AI-powered applications,
developer tools and modern software
products.

</p>



<HeroButtons/>



</motion.div>




<motion.div

initial={{

opacity:0,

scale:.7

}}

animate={{

opacity:1,

scale:1

}}

transition={{

duration:1

}}

className="

flex

justify-center

"

>


<CyberOrb/>


</motion.div>



</div>


</section>

)

}