"use client";

import { useState } from "react";
import { commands } from "@/data/commands";


export default function TerminalNav() {

const [open,setOpen] = useState(false);


function scrollToSection(target:string){

const element = document.getElementById(target);

if(element){

element.scrollIntoView({
behavior:"smooth"
});

}

setOpen(false);

}


return (

<nav

className="
fixed

top-5

left-1/2

-translate-x-1/2

z-50

w-[92%]

max-w-5xl

"

>


<div

className="
bg-black/70

backdrop-blur-xl

border

border-cyan-400/30

rounded-2xl

shadow-[0_0_30px_rgba(0,245,255,.15)]

"

>


{/* TOP BAR */}

<div

className="
flex

items-center

justify-between

px-5

py-3

"

>


<div

className="
flex

items-center

gap-3

font-mono

text-sm

"

>


<div className="flex gap-2">


<span className="
w-3
h-3
rounded-full
bg-red-500
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



<span className="text-cyan-400">

salim@ascii-os

</span>


<span className="text-gray-500">

:~

</span>


</div>



<button

onClick={()=>setOpen(!open)}

className="
md:hidden

text-cyan-400

font-mono

"

>

{open ? "close" : "menu"}

</button>


</div>




{/* MENU */}

<div

className={`
md:flex

items-center

justify-center

gap-8

px-5

pb-4


font-mono

text-sm


${

open
?
"block"
:
"hidden md:flex"

}

`}

>


{
commands.map((item)=>(


<button

key={item.command}

onClick={()=>scrollToSection(item.target)}

className="
text-gray-400

hover:text-cyan-400

transition

"

>


<span className="text-purple-400">

$

</span>

{" "}

{item.command}


</button>


))

}



<button

className="
px-4

py-2

rounded-lg

border

border-purple-500

text-purple-400

hover:bg-purple-500

hover:text-black

transition

"

>

Resume

</button>



</div>


</div>


</nav>

)

}