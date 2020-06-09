import React from "react";
import "./styles/main.css";

function App() {
  return (
    <div class="max-w-sm rounded-ten overflow-hidden shadow-lg top-auto m-10">
      <img
        class="w-full object-cover"
        src="https://placekitten.com/600/400"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4 bg-white">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 py-4 bg-white">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #photography
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #travel
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #winter
        </span>
      </div>
    </div>
  );
}

export default App;
