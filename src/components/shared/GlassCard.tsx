interface Props{

children:React.ReactNode;

}


export default function GlassCard({
children
}:Props){

return(

<div

className="
rounded-2xl

bg-white/5

border

border-white/10

backdrop-blur-xl

p-6

hover:border-purple-400

transition

"

>

{children}

</div>

)

}