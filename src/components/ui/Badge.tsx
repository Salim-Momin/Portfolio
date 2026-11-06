export default function Badge({

children

}:{

children:React.ReactNode

}){


return (

<span

className="

inline-flex

items-center

gap-2

px-3

py-1

rounded-full

border

border-purple-400/30

bg-purple-400/10

text-purple-400

text-sm

font-mono

"

>

<span className="
w-2
h-2
rounded-full
bg-purple-400
animate-pulse
"/>


{children}


</span>

)

}