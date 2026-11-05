"use client";


import CommandList from "./CommandList";


export default function TerminalNav(){


return (

<div

className="
fixed

top-6

left-1/2

-translate-x-1/2


z-40


w-[90%]

max-w-3xl


"

>


<div

className="
bg-black/70

backdrop-blur-xl


border

border-cyan-400/30


rounded-xl


shadow-[0_0_30px_rgba(0,245,255,.2)]


p-5

"

>


<div

className="
flex

items-center

gap-2

mb-5

font-mono

text-cyan-400

"

>

<span>

salim@ascii-os

</span>


<span className="text-gray-500">

:

</span>


<span>

~

$

</span>


</div>



<CommandList/>


</div>


</div>

)

}