export default function PanelHeader({

title

}:{

title:string

}){


return (

<div

className="

flex

items-center

gap-3

mb-5

font-mono

"

>

<span className="
text-cyan-400
">

01.

</span>


<h3 className="
text-xl
text-white
">

{title}

</h3>


</div>

)

}