"use client";

import {motion} from "framer-motion";


export default function AsciiLogo(){

return(

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

className="font-mono"

>


{/* SALIM */}

<pre

className="
text-xs
sm:text-sm
md:text-base

leading-none

font-bold

text-cyan-400

drop-shadow-[0_0_8px_rgba(0,245,255,.35)]

"

>

{`

███████╗ █████╗ ██╗     ██╗███╗   ███╗
██╔════╝██╔══██╗██║     ██║████╗ ████║
███████╗███████║██║     ██║██╔████╔██║
╚════██║██╔══██║██║     ██║██║╚██╔╝██║
███████║██║  ██║███████╗██║██║ ╚═╝ ██║
╚══════╝╚═╝  ╚═╝╚══════╝╚═╝

`}

</pre>


{/* MOMIN */}

<pre

className="
text-xs
sm:text-sm
md:text-base

leading-none

font-bold

text-purple-400

drop-shadow-[0_0_8px_rgba(139,92,246,.35)]

"

>

{`

███╗   ███╗ ██████╗ ███╗   ███╗██╗███╗   ██╗
████╗ ████║██╔═══██╗████╗ ████║██║████╗  ██║
██╔████╔██║██║   ██║██╔████╔██║██║██╔██╗ ██║
██║╚██╔╝██║██║   ██║██║╚██╔╝██║██║██║╚██╗██║
██║ ╚═╝ ██║╚██████╔╝██║ ╚═╝ ██║██║██║ ╚████║
╚═╝     ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝

`}

</pre>


</motion.div>

)

}