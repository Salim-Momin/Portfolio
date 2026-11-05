"use client";

import { motion } from "framer-motion";

export default function AsciiLogo(){

return (

<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

className="font-mono select-none"

>


{/* SALIM - CYAN */}

<pre

className="
text-cyan-400

text-xs
sm:text-sm
md:text-base

font-bold

leading-[0.8]

drop-shadow-[0_0_15px_rgba(0,245,255,.8)]

"

>

{`
███████╗ █████╗ ██╗     ██╗███╗   ███╗
██╔════╝██╔══██╗██║     ██║████╗ ████║
███████╗███████║██║     ██║██╔████╔██║
╚════██║██╔══██║██║     ██║██║╚██╔╝██║
███████║██║  ██║███████╗██║██║ ╚═╝ ██║
╚══════╝╚═╝  ╚═╝╚══════╝╚═╝╚═╝     
`}

</pre>



{/* MOMIN - PURPLE */}

<pre

className="
text-purple-500

text-xs
sm:text-sm
md:text-base

font-bold

leading-[0.8]

drop-shadow-[0_0_20px_rgba(139,92,246,.8)]

"

>

{`
███╗   ███╗ ██████╗ ███╗   ███╗██╗███╗   ██╗
████╗ ████║██╔═══██╗████╗ ████║██║████╗  ██║
██╔████╔██║██║   ██║██╔████╔██║██║██╔██╗ ██║
██║╚██╔╝██║██║   ██║██║╚██╔╝██║██║██║╚██╗██║
██║ ╚═╝ ██║╚██████╔╝██║ ╚═╝ ██║██║██║ ╚████║
╚═╝     ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝
`}

</pre>



<div
className="
mt-6

text-cyan-400

font-mono

text-xl

"

>

</div>


</motion.div>

)

}