import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen text-4xl font-bold gap-2.5">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <h1>Rajput</h1>
          <h1>Genset</h1>
          <h1>& Solar</h1>
        </div>
        <Button>Go to dashboard</Button>
      </div>
    </div>
  );
};

export default Home;
