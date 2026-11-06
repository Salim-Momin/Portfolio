"use client";

import {motion} from "framer-motion";


const logs = [
"Initializing ASCII.OS...",
"Loading developer profile...",
"Connecting AI modules...",
"Projects loaded successfully.",
"System status: ONLINE"
];


export default function HeroTerminal(){

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
delay:0.5
}}

className="

mt-8

w-full

max-w-md

rounded-xl

border

border-cyan-400/20

bg-black/60

backdrop-blur-xl

font-mono

shadow-[0_0_25px_rgba(0,245,255,.08)]

"

>


{/* Header */}

<div

className="
flex
gap-2
px-4
py-3
border-b
border-cyan-400/10
"

>

<span className="
w-3
h-3
rounded-full
bg-red-400
"/>

<span className="
w-3
h-3
rounded-full
bg-yellow-400
"/>

<span className="
w-3
h-3
rounded-full
bg-green-400
"/>


</div>


{/* Content */}

<div className="
p-5
text-sm
space-y-3
"

>


<div className="text-cyan-400">

salim@ascii-os:~$

</div>


{

logs.map((log,index)=>(

<p

key={index}

className={

index === logs.length-1

?

"text-purple-400"

:

"text-gray-400"

}

>

&gt; {log}

</p>

))

}


</div>


</motion.div>

)

}