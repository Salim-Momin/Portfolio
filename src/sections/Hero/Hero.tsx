"use client";


import {motion} from "framer-motion";

import AsciiLogo from "./AsciiLogo";
import CyberVisual from "./CyberVisual";
import HeroButtons from "./HeroButtons";
import HeroTerminal from "./HeroTerminal";
import StatusPanel from "./StatusPanel";

export default function Hero(){


return(

<section

className="

min-h-screen

pt-40

flex

items-center

"

>


<div

className="

grid

md:grid-cols-2

gap-12

items-center

w-full

"

>



{/* LEFT */}

<motion.div

initial={{
opacity:0,
x:-40
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:0.8
}}

>


<div

className="
text-cyan-400

font-mono

mb-6

"

>

&gt; SYSTEM ONLINE_

</div>


<AsciiLogo/>


<h2

className="

mt-8

text-2xl

font-mono

text-purple-400

"

>

Full Stack Developer

<br/>

<span className="text-cyan-400">

AI Engineer

</span>

</h2>


<p

className="
mt-5

text-gray-400

max-w-lg

"

>

Building AI-powered applications,
developer tools and modern software
systems.

</p>


<HeroButtons/>

<HeroTerminal/>

<StatusPanel/>

</motion.div>



{/* RIGHT */}

<div

className="
flex

justify-center

"

>

<CyberVisual/>

</div>



</div>


</section>

)

}