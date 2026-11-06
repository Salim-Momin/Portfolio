"use client";


export default function Navbar(){


return (

<nav

className="
fixed

top-5

left-1/2

-translate-x-1/2

z-50

w-[90%]

max-w-6xl

"

>


<div

className="
flex

items-center

justify-between


px-6

py-4


rounded-2xl


border

border-cyan-400/20


bg-black/60


backdrop-blur-xl


"

>


<div

className="
font-mono

text-cyan-400

"

>

ASCII.OS

</div>



<div

className="
hidden

md:flex

gap-8

font-mono

text-sm

text-gray-400

"

>

<span>
Home
</span>

<span>
About
</span>

<span>
Projects
</span>

<span>
Contact
</span>


</div>



<button

className="
border

border-purple-500

text-purple-400

px-4

py-2

rounded-lg

"

>

Resume

</button>


</div>


</nav>

)

}