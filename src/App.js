import React from "react";

const App = () => {
  return (
    <>
      <h1 className="font-bold">---WIDTH---</h1>
      <div className="font-bold">
        With "container mx-auto" class we can centering the div 👇{" "}
      </div>
      <div className="container mx-auto bg-red-500">
        Red Background Container Div
      </div>
      <div className="font-bold">
        {" "}
        In Tailwind, we use 4 Point System which means all values are multiples
        of 4
      </div>
      <div className="font-bold">For example 👇 </div>
      <div className="bg-green-500 w-16">w-16 means 64px width</div>
      <br />
      <div className="bg-green-500 w-1/2">
        w-1/2 means half of the full width
      </div>
      <br />
      <div className="bg-green-500 w-1/4">
        w-1/4 means quarter of the full width
      </div>
      <br />
      <div className="bg-green-500 w-max">
        w-max is a width same with the ontent with
      </div>
      <br />
      <div className="bg-green-500 w-full">w-full means full width</div>
      <br />
      <div className="font-bold">
        {" "}
        If you want to use a width different from 4 points system you can use []
      </div>
      <div className="bg-green-500 w-[233px]">w-[233px] means full width</div>
      ----------------------------------------------------------------------------------------------------------------
      <h1 className="font-bold">---FLEX---</h1>
      <div className="bg-yellow-500 w-auto flex flex-row-reverse">
        <div className="h-10 w-10 bg-red-500">1</div>
        <div className="h-10 w-10 bg-blue-500">2</div>
        <div className="h-10 w-10 bg-green-500">3</div>
      </div>
      ----------------------------------------------------------------------------------------------------------------
      ----------------------------------------------------------------------------------------------------------------
      <h1 className="font-bold">---WRAPPING FLEX-ITEMS---</h1>
      <div className="bg-yellow-500 w-auto flex flex-wrap-reverse">
        <div className="h-10 w-80 bg-red-500">1</div>
        <div className="h-10 w-80 bg-blue-500">2</div>
        <div className="h-10 w-80 bg-green-500">3</div>
      </div>
      ----------------------------------------------------------------------------------------------------------------
      ----------------------------------------------------------------------------------------------------------------
      <h1 className="font-bold">---GROW and SHRINK FLEX-ITEMS---</h1>
      flex-1 provides us items which have same width
      <br />
      flex-initial is something like max-width
      <br />
      <div className="bg-yellow-500 w-auto flex ">
        <div className="h-10 flex-1 bg-red-500 w-80">1</div>
        <div className="h-10 flex-auto bg-blue-500 w-80">2</div>
        <div className="h-10 flex-initial bg-green-500 w-80">3</div>
        <div className="h-10 flex-none bg-orange-500 w-80">4</div>
        <div className="h-10 flex-grow-0 bg-blue-500 w-80">5</div>
      </div>
      <br />
      order-1 makes an elment first !!! if you want to use order class you
      should put all children an order
      <div className="flex">
        <div className="bg-red-500 flex-1 order-3">1</div>
        <div className="bg-blue-500 flex-1 order-2">2</div>
        <div className="bg-green-500 flex-1 order-1">3</div>
      </div>
      ----------------------------------------------------------------------------------------------------------------
      <h1 className="font-bold">---GRID LAYOUT---</h1>
      <div className="bg-yellow w-auto grid grid-cols-3 gap-8">
        <div className="col-span-2 h-20 bg-red-500">1</div>
        <div className="h-20 bg-red-500">2</div>
        <div className="h-20 bg-red-500">3</div>
        <div className="h-20 bg-red-500">4</div>
        <div className="h-20 bg-red-500">5</div>
        <div className="h-20 bg-red-500">6</div>
        <div className="h-20 bg-red-500">7</div>
        <div className="h-20 bg-red-500">8</div>
        <div className="h-20 bg-red-500">9</div>
      </div>
      ----------------------------------------------------------------------------------------------------------------
      ----------------------------------------------------------------------------------------------------------------
      <h1 className="font-bold">---ROW LAYOUT---</h1>
      <div className="bg-yellow w-auto grid grid-rows-5 grid-flow-col  gap-8">
        <div className="h-20 bg-yellow-500">1</div>
        <div className="h-20 bg-yellow-500">2</div>
        <div className="h-20 bg-yellow-500">3</div>
        <div className="h-20 bg-yellow-500">4</div>
        <div className="h-20 bg-yellow-500">5</div>
        <div className="h-20 bg-yellow-500">6</div>
        <div className="h-20 bg-yellow-500">7</div>
        <div className="h-20 bg-yellow-500">8</div>
        <div className="h-20 bg-yellow-500">9</div>
      </div>
      ----------------------------------------------------------------------------------------------------------------
      ----------------------------------------------------------------------------------------------------------------
      <h1 className="font-bold">---Margin and Padding---</h1>
      mb ml mt mr --- margin for four sides
      <div className="bg-blue-500 m-10 p-10">
        <div className="bg-red-500 p-10">This is the inner</div>
      </div>
      ----------------------------------------------------------------------------------------------------------------
      ----------------------------------------------------------------------------------------------------------------
      <h1 className="font-bold">---Styling text---</h1>
      <div className="text-sm">This is a heading</div>
      <div className="text-xs">This is a heading</div>
      <div className="text-base">This is a heading</div>
      <div className="text-lg">This is a heading</div>
      <div className="text-2xl">This is a heading</div>
      <div className="text-4xl italic ">This is a heading</div>
      <div className="text-base font-thinner">This is a heading</div>
      <div className="text-base font-light">This is a heading</div>
      <div className="text-base font-bold">This is a heading</div>
      <div className="text-base font-extrabold">This is a heading</div>
      <div className="text-base text-right">This is a heading</div>
      <div className="text-base text-left">This is a heading</div>
      <div className="text-base text-center">This is a heading</div>
      <div className="text-base text-blue-500">This is a heading</div>
      <div className="text-base text-[#fff]">This is a heading</div>
      <div className="text-base text-green-700 opacity-50 ">
        This is a heading
      </div>
      <div className="text-base text-green-700  capitalize">
        This is a heading
      </div>
      <div className="text-base text-green-700  uppercase">
        This is a heading
      </div>
      ----------------------------------------------------------------------------------------------------------------
      ----------------------------------------------------------------------------------------------------------------
      <h1 className="font-bold">---Border Radius---</h1>
      <button className="bg-green-500 m-20 p-5 text-white rounded">
        This is a Button
      </button>
      <button className="bg-green-500 m-20 p-5 text-white rounded-sm">
        This is a Button
      </button>
      <button className="bg-green-500 m-20 p-5 text-white rounded-r-md">
        This is a Button
      </button>
      <button className="bg-green-500 m-20 p-5 text-white rounded-t-lg">
        This is a Button
      </button>
      <button className="bg-green-500 m-20 p-5 text-white rounded-xl">
        This is a Button
      </button>
      <button className="bg-green-500 m-20 p-5 text-white rounded-2xl">
        This is a Button
      </button>
      <br />
      ----------------------------------------------------------------------------------------------------------------
      ----------------------------------------------------------------------------------------------------------------
      <h1 className="font-bold">---Styling Border---</h1>
      <button className="bg-green-500 m-20 p-5 text-white rounded border-0">
        This is a Button
      </button>
      <button className="bg-green-500 m-20 p-5 text-white rounded border-8">
        This is a Button
      </button>
      <button className="bg-green-500 m-20 p-5 text-white rounded border-r-8 border-opacity-50 border-red-500">
        This is a Button
      </button>
      <button className="bg-green-500 m-20 p-5 text-white rounded border-t-8 border-red-900">
        This is a Button
      </button>
      <button className="bg-green-500 m-20 p-5 text-white rounded border-8 border-dashed border-blue-500">
        This is a Button
      </button>
      <button className="bg-green-500 m-20 p-5 text-white rounded border-8 border-dotted border-blue-500">
        This is a Button
      </button>
      <br />
      ----------------------------------------------------------------------------------------------------------------
      ----------------------------------------------------------------------------------------------------------------
      <h1 className="font-bold">---Shadows---</h1>
      <button className="bg-white-500 m-20 p-5 text-black shadow-2xl ">
        This is a Button
      </button>
      <button className="bg-white-500 m-20 p-5 text-black shadow-inner ">
        This is a Button
      </button>
      <br />
      ----------------------------------------------------------------------------------------------------------------
      ----------------------------------------------------------------------------------------------------------------
      <h1 className="font-bold">---BreakPoints---</h1>
      <h1 className="text-5xl 2xl:text-pink-500 ">Heading</h1>
      <h1 className="text-5xl 2xl:text-yellow-500  xl:text-pink-500 lg:text-red-500 lg:text-2xl">
        Heading
      </h1>
      ----------------------------------------------------------------------------------------------------------------
      ----------------------------------------------------------------------------------------------------------------
      <h1 className="font-bold">---Pseudo Elements---</h1>
      <button className="bg-yellow-500 hover:bg-red-500 hover:text-white">
        Click
      </button>
      <br />
      <input
        placeholder="Add Name"
        className="bg-gray-200 focus:bg-green-500"
      ></input>
      <div className="bg-red-500 group">
        <p className="group-hover:text-white">Para 1</p>
        <p className="group-hover:text-white">Para 2</p>
      </div>
      <br />
      ----------------------------------------------------------------------------------------------------------------
      ----------------------------------------------------------------------------------------------------------------
      <h1 className="font-bold">---Layer Apply Directives---</h1>
      <a href="/">
        {/* checkout index.css */}
        Click Here
      </a>
      <br />
      ----------------------------------------------------------------------------------------------------------------
      ----------------------------------------------------------------------------------------------------------------
      <h1 className="font-bold">---Components---</h1>
      {/* checkout index.css */}
      <button className="menu-button">Click Here</button>
      <br />
      <br />
      <button className="menu-button">Exit</button>
      <br />
      <br />
      <button className="menu-button">Open</button>
      <br />
      ----------------------------------------------------------------------------------------------------------------

      ----------------------------------------------------------------------------------------------------------------
      <h1 className="font-bold">---Utility Classes---</h1>
      {/* checkout index.css */}
        <h1 className="text-green-500">
          Heading
        </h1>
      <br />
      ----------------------------------------------------------------------------------------------------------------
      ----------------------------------------------------------------------------------------------------------------
      <h1 className="font-bold">---Apply Directives---</h1>
      {/* checkout index.css */}
        
      <br />
      ----------------------------------------------------------------------------------------------------------------
    </>
  );
};

export default App;
