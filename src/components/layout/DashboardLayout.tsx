import Container from "./Container";


export default function DashboardLayout({

children

}:{
children:React.ReactNode
}){


return (

<>

<div
className="
min-h-screen

relative

overflow-hidden

"
>

<Container>

{children}

</Container>


</div>


</>

)

}