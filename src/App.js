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
    </>
  );
};

export default App;
