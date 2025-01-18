import DaisyNav from "./components/daisyNav/DaisyNav";
import Navbar from "./components/navbar/Navbar";
import PriceOptions from "./components/priceOptions/PriceOptions";

function App() {
  return (
    <>
      <Navbar />
      {/* <DaisyNav /> */}
      <h1 className="text-3xl font-bold bg-blue-500 text-white text-center p-3">
        In the name of Allah, The Entirely Merciful, The Especially Merciful.
      </h1>
      <PriceOptions />
    </>
  );
}

export default App;
