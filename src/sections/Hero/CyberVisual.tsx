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

w-80
h-80
md:w-[420px]
md:h-[420px]

rounded-full

relative

bg-gradient-to-br

from-cyan-400/30

to-purple-600/30

shadow-[0_0_60px_rgba(0,245,255,.25)]

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