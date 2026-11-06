export default function NeonButton({

children

}:{

children:React.ReactNode

}){


return (

<button

className="

px-6

py-3


rounded-xl


font-mono


border

border-cyan-400


text-cyan-400


bg-cyan-400/5


shadow-[0_0_20px_rgba(0,245,255,.3)]


hover:bg-cyan-400


hover:text-black


transition


"

>

{children}

</button>

)

}