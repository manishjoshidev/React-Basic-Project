import Background from "./components/Background";
import Foreground from "./components/Foreground";
import Card from "./components/Card";

function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-600">
      <Background />
      <Foreground />
      <Card />
    </div>
  );
}

export default App;
