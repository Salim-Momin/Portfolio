import {profile} from "@/data/profile";


export default function ProfileCard(){


return(

<div

className="
font-mono

bg-black/60

border

border-cyan-400/30

rounded-xl

p-6

shadow-[0_0_30px_rgba(0,245,255,.15)]

"

>


<div className="
text-cyan-400
mb-6
"

>

╔══════════════════╗

<br/>

&nbsp;&nbsp;USER PROFILE

<br/>

╚══════════════════╝

</div>



<div className="space-y-4">


<p>

<span className="text-purple-400">

NAME:

</span>

<br/>

{profile.name}

</p>



<p>

<span className="text-purple-400">

ROLE:

</span>

<br/>

{
profile.role.map((item)=>(
<span key={item} className="block">
→ {item}
</span>
))
}

</p>



<p>

<span className="text-purple-400">

MISSION:

</span>

<br/>

{profile.mission}

</p>



<p>

<span className="text-purple-400">

INTERESTS:

</span>

<br/>

{
profile.interests.map((item)=>(
<span key={item} className="block">
→ {item}
</span>
))
}

</p>


</div>


</div>

)

}