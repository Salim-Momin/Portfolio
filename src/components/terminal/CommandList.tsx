import {commands} from "@/data/commands";


export default function CommandList(){

return (

<div
className="
space-y-3

font-mono

text-sm

"
>


{
commands.map((item)=>(


<div

key={item.command}

className="
flex
gap-4

hover:text-cyan-400

cursor-pointer

transition
"

>

<span
className="
text-purple-400
"
>

$

</span>


<span>

{item.command}

</span>


<span
className="
text-gray-500
"
>

-
{item.description}

</span>


</div>


))

}


</div>

)

}