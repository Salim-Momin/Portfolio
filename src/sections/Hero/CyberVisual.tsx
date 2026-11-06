"use client";


import {motion} from "framer-motion";


export default function CyberVisual(){


return(

<motion.div

animate={{

y:[0,-15,0]

}}

transition={{

duration:4,

repeat:Infinity

}}

className="

w-72

h-72

rounded-full

relative

bg-gradient-to-br

from-cyan-400/30

to-purple-600/30

shadow-[0_0_100px_rgba(0,245,255,.4)]

"

>


<div

className="

absolute

inset-10

rounded-full

bg-black

border

border-cyan-400/30

"

/>


</motion.div>

)

}