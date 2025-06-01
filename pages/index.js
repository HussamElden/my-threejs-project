import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Welcome to The Brewery Specialty Coffee</h1>
      <button
        style={{ padding: "1rem 2rem", fontSize: "1.2rem", cursor: "pointer" }}
        onClick={() => router.push("/scene")}
      >
        Show 3D Experience
      </button>
    </div>
  );
}
