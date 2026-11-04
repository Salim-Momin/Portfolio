export default function TerminalWindow(){

return(

<div

className="
rounded-xl

border

border-cyan-400/30

bg-black

overflow-hidden

"

>

<div

className="
flex
gap-2
p-3

border-b

border-white/10

"

>

<div className="
w-3
h-3
rounded-full
bg-red-500
"/>

<div className="
w-3
h-3
rounded-full
bg-yellow-500
"/>

<div className="
w-3
h-3
rounded-full
bg-green-500
"/>


</div>


<div className="
p-5
font-mono
text-cyan-400
">

salim@ascii-os:~$

</div>


</div>

)

}