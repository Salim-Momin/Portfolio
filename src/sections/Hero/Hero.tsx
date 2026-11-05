"use client";

import { motion } from "framer-motion";

import AsciiLogo from "./AsciiLogo";
import HeroButtons from "./HeroButtons";
import CyberOrb from "@/components/effects/CyberOrb";


export default function Hero() {


return (

<section

className="
min-h-screen

flex
items-center

px-6
pt-40
pb-20

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

gap-12

items-center

w-full

"

>



{/* LEFT SIDE */}

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


{/* Status */}

<div

className="
inline-flex

items-center

gap-2

px-4

py-2

rounded-full

border

border-cyan-400/30

bg-cyan-400/5

text-cyan-400

font-mono

text-sm

mb-8
"

>

<span
className="
w-2
h-2

rounded-full

bg-green-400

animate-pulse
"
/>

Available for Opportunities

</div>



{/* ASCII NAME */}

<AsciiLogo/>




{/* ROLE */}

<h2

className="
mt-8

text-xl

md:text-3xl

font-mono

text-cyan-400

"

>

&gt; Full Stack Developer

<br/>

<span

className="
text-purple-400
"

>

&amp; AI Engineer

</span>


<span className="animate-pulse">

_

</span>


</h2>





{/* DESCRIPTION */}

<p

className="
mt-6

text-gray-400

max-w-xl

text-base

md:text-lg

leading-relaxed

"

>

I build modern web applications,
AI-powered tools and developer
products that solve real-world problems.

</p>




{/* BUTTONS */}

<HeroButtons/>




</motion.div>





{/* RIGHT SIDE */}

<motion.div

initial={{

opacity:0,

scale:0.7

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