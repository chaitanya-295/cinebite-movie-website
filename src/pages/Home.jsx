import { useEffect, useState } from "react";
import Hero from '../component/Hero';

function Home() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Hero />
    </div>
  );
}

export default Home;