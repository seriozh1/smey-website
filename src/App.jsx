import { useState } from "react";

const PRODUCTS = [
  { name: "Chufa" },
  { name: "Olive" },
  { name: "Adjouaba" },
  { name: "Macadamia nut" },
  { name: "Cocoa butter" },
];

function App() {
  const [selected, setSelected] = useState(PRODUCTS[0].name);
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="min-h-screen bg-starfield flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-scifi font-bold tracking-widest text-white mb-10 drop-shadow-[0_0_16px_#b6d36b] animate-pulse">SMEY</h1>
      <div className="bg-white/10 backdrop-blur-md border border-sciblue/30 rounded-2xl shadow-2xl p-10 flex flex-col items-center w-full max-w-md glassy-card">
        <label htmlFor="product" className="block text-xl font-scifi text-white mb-3 tracking-wide">
          Select a product
        </label>
        <select
          id="product"
          className="w-full mb-6 px-4 py-2 border border-smeyorange bg-sciblack text-smeyorange rounded-lg focus:outline-none focus:ring-2 focus:ring-smeyorange font-scifi shadow-inner"
          value={selected}
          onChange={e => {
            setSelected(e.target.value);
            setShowImage(false);
          }}
        >
          {PRODUCTS.map((p) => (
            <option key={p.name} value={p.name} className="bg-sciblack text-smeyorange">
              {p.name}
            </option>
          ))}
        </select>
        <button
          className="w-full bg-smeyorange text-white font-scifi font-bold py-2 px-6 rounded-full transition-all duration-200 mb-4 mt-2 shadow-lg border-none hover:bg-[#ffb866] focus:ring-4 focus:ring-smeyorange/50"
          onClick={() => setShowImage(true)}
        >
          Search
        </button>
        {showImage && (
          <div className="mt-6 w-full flex flex-col items-center">
            <img
              src="/olive.png"
              alt={selected}
              className="rounded-xl shadow-xl max-h-64 object-contain border-2 border-sciblue bg-sciblack/80 backdrop-blur-md"
            />
            <span className="mt-4 text-smeyorange text-lg font-scifi tracking-widest drop-shadow-[0_0_8px_#FFA94D] font-bold">
              {selected}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App; 