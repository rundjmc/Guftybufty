import { useState } from "react";

export default function Home() {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const fantasies = [
    "28 year old thick brunette bent over hotel bed, skirt ripped, getting destroyed balls deep, sweat dripping off ass cheeks, messy hair stuck to face, ultra realistic",
    "30 year old redhead with huge tits on her knees in public toilet, throat stuffed, mascara running, spit ropes from lips to cock, hands cuffed behind back",
    "26 year old tattooed Latina riding reverse cowgirl in packed club, ass bouncing hard, pussy stretched wide around veiny shaft, cum leaking everywhere",
    "32 year old busty blonde secretary under desk during meeting, mouth full of boss cock, eyes watering, lipstick smeared all over balls",
    "29 year old pale goth girl double penetrated on couch, tongue out, eyes rolled back, covered in thick cum, begging like a desperate whore"
  ];

  const generate = async () => {
    setLoading(true);
    const prompt = fantasies[Math.floor(Math.random() * fantasies.length)] + ", photorealistic, 8k, detailed skin, wet fluids";
    const res = await fetch(`https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5`, {
      headers: { Authorization: `Bearer hf_YOUR_HUGGINGFACE_TOKEN_HERE` },
      method: "POST",
      body: JSON.stringify({ inputs: prompt }),
    });
    const blob = await res.blob();
    setImg(URL.createObjectURL(blob));
    setLoading(false);
  };

  return (
    <div style={{minHeight:"100vh", background:"black", color:"white", padding:"20px", textAlign:"center"}}>
      <h1 style={{fontSize:"48px"}}>LOWEY'S PRIVATE FILTH</h1>
      <p style={{fontSize:"24px"}}>18+ only • unlimited • free forever</p>
      <button onClick={generate} disabled={loading} style={{fontSize:"32px", padding:"20px 40px", background:"#d00", margin:"30px"}}>
        {loading ? "cooking fresh cum..." : "GENERATE NEXT SLUT"}
      </button>
      {img && <img src={img} style={{maxWidth:"100%", marginTop:"20px", border:"4px solid red"}} />}
    </div>
  );
}
