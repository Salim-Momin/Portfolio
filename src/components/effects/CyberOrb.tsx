"use client";


import {motion} from "framer-motion";


export default function CyberOrb(){

return (

<motion.div

animate={{

y:[0,-20,0]

}}

transition={{

duration:4,

repeat:Infinity

}}

className="

relative

w-72
h-72

rounded-full

bg-gradient-to-br

from-cyan-400/30

to-purple-600/30


blur-none

shadow-[0_0_80px_rgba(0,245,255,.5)]

"

>


<div

className="

absolute

inset-10

rounded-full

bg-black

border

border-cyan-400/40

"

/>


</motion.div>

)

}