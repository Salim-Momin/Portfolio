import Container from "./Container";


export default function Section({

children,
id

}:{

children:React.ReactNode,
id:string

}){


return(

<section

id={id}

className="
min-h-screen

py-24

"

>

<Container>

{children}

</Container>


</section>

)

}