import React from "react";

const Terminal = () => {
  return (
    <aside class="bg-black h-[80vh] w-[80vw] border-slate-700 border-[1px] shadow-lg shadow-black text-white p-6 rounded-lg mx-auto my-6 flex flex-col">
      <div class="flex justify-between items-center">
        <p class="text-sm">bash</p>
        <div class="flex space-x-2 text-red-500">
          <div class="w-4 h-4 rounded-full bg-red-500"></div>
          <div class="w-4 h-4 rounded-full bg-yellow-500"></div>
          <div class="w-4 h-4 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div class="mt-4 flex">
        <span class="text-green-400">$</span>
        <input
          id="input"
          type="text"
          autofocus
          class="bg-black text-white border-none outline-none flex-grow ml-2 text-xs sm:text-sm md:text-base lg:text-lg"
          placeholder="Type a command"
        />
      </div>

      <div
        class="mt-4 overflow-y-auto h-64 text-xs sm:text-sm md:text-base lg:text-lg"
        id="output"
      ></div>
    </aside>
  );
};

export default Terminal;
