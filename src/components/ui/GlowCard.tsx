export default function GlowCard({

children

}:{

children:React.ReactNode

}){


return (

<div

className="
relative

overflow-hidden

rounded-2xl

border

border-cyan-400/20

bg-black/50

backdrop-blur-xl

p-6

shadow-[0_0_40px_rgba(0,245,255,0.08)]

hover:border-cyan-400/50

transition

"

>

{children}


</div>

)

}