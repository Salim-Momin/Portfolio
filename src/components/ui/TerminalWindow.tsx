export default function TerminalWindow({

children

}:{

children:React.ReactNode

}){


return (

<div

className="

rounded-xl

border

border-cyan-400/20


bg-black/70


font-mono


overflow-hidden


"

>


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



<div className="p-5">

{children}

</div>



</div>

)

}