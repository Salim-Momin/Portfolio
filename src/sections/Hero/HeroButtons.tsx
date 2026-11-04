import NeonButton from "@/components/shared/NeonButton";


export default function HeroButtons(){

return (

<div
className="
flex
gap-5
mt-8
"
>


<NeonButton>

View Projects

</NeonButton>



<button

className="
px-6
py-3

rounded-xl

border

border-purple-500

text-purple-400

hover:bg-purple-500

hover:text-black

transition

"

>

Contact Me

</button>


</div>

)

}