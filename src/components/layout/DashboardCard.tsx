export default function DashboardCard({

children

}:{
children:React.ReactNode
}){


return(

<div

className="
bg-black/40

border

border-cyan-400/20

rounded-2xl

p-6

backdrop-blur-xl

shadow-[0_0_30px_rgba(0,245,255,0.08)]

"

>

{children}

</div>

)

}