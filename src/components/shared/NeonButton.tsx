interface Props{

children:React.ReactNode;

}


export default function NeonButton({
children
}:Props){

return(

<button

className="
px-6
py-3

rounded-xl

border

border-cyan-400

text-cyan-400

font-mono

hover:bg-cyan-400

hover:text-black

transition

shadow-[0_0_20px_rgba(0,245,255,.5)]

"

>

{children}

</button>

)

}