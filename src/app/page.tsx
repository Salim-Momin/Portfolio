import GlowCard from "@/components/ui/GlowCard";
import NeonButton from "@/components/ui/NeonButton";
import Badge from "@/components/ui/Badge";
import TerminalWindow from "@/components/ui/TerminalWindow";
import PanelHeader from "@/components/ui/PanelHeader";


export default function Home(){

return (

<main className="p-10 space-y-8">


<PanelHeader title="SYSTEM TEST"/>


<GlowCard>

<Badge>
ONLINE
</Badge>

<br/>

<TerminalWindow>

salim@ascii-os:~$

</TerminalWindow>


<NeonButton>

START

</NeonButton>


</GlowCard>


</main>

)

}