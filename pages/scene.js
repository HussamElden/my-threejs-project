// pages/scene.js
import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("../components/ThreeScene"), {
  ssr: false,
});

export default function ScenePage() {
  return (
    <div>
      <ThreeScene />
    </div>
  );
}
