import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {


  const colorSections = [
    {
      bg: "bg-amber-100",
      colors: [
        { hex: "#bd7e75", name: "Muted Rose" },
        { hex: "#eac0b7", name: "Soft Blush" },
        { hex: "#cdb5d1", name: "Lavender Mist" },
        { hex: "#c3e0dc", name: "Pale Aqua" },
        { hex: "#d9c2d1", name: "Dusty Lilac" },
        { hex: "#f4e1d2", name: "Peach Cream" },
      ],
    },
    {
      bg: "bg-[#e8f4ef]",
      colors: [
        { hex: "#bd7e75", name: "Muted Rose" },
        { hex: "#75bd9d", name: "Mint Green" },
        { hex: "#757ebd", name: "Periwinkle" },
        { hex: "#9dd6bb", name: "Seafoam" },
        { hex: "#5a9d7d", name: "Forest Mist" },
        { hex: "#9d9fd6", name: "Dusty Blue" },
      ],
    },
    {
      bg: "bg-[#f0f7f6]",
      colors: [
        { hex: "#bd7e75", name: "Muted Rose" },
        { hex: "#75bdb6", name: "Teal Mist" },
        { hex: "#e8c9c5", name: "Blush Sand" },
        { hex: "#a3665e", name: "Rust Red" },
        { hex: "#a6d9d4", name: "Aqua Breeze" },
        { hex: "#5a9d97", name: "Deep Teal" },
      ],
    },
  ];

  return (
    <div className="grid bg-[#ececec] grid-cols-1 items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-400 text-center">
  Deedee&apos;s Threads
</h1>

<h3 className={`text-black ${montserrat.className} text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mt-[4rem]`}>
  Colour Palette
</h3>



      {/* Color Sections */}
      {colorSections.map(({ bg, colors }, index) => (
        <div
          key={index}
          className={`w-1/2 lg:w-4/5 mx-auto my-auto p-4 rounded-lg shadow-md ${bg}`}
        >
          <div className="flex flex-col lg:flex-row gap-4 py-6">
            {colors.map(({ hex, name }) => (
              <div
                key={hex}
                className="flex-1 flex flex-col gap-4 items-center shadow-sm rounded-lg p-2"
              >
                {/* Color Block */}
                <div
                  className="w-full h-24 lg:h-32 rounded-md"
                  style={{ backgroundColor: hex }}
                ></div>
                {/* Label */}
                <p className="text-base lg:text-xl text-gray-800 font-medium mt-2 text-center">
                  {name} <br />
                  <span className={`${montserrat.className}
                       text-xs lg:text-sm text-gray-600`}>{hex}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
