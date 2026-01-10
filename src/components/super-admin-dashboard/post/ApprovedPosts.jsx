import React from "react";
import CardImage from "../../../assets/cardImg1.png";
export default function ApprovedPosts() {
  return (
    <div className="grid grid-cols-4">
      <div class="bg-white shadow-xs rounded p-3 text-center">
        <img src={CardImage} alt="post" class="object-cover rounded" />
        <h3 class="mt-2 font-medium text-gray-700">Malaysia Work Visa</h3>
        <hr class="border-t border-blue-600 my-2" />
        <div class="flex justify-center space-x-4 mt-2">
          <button class="text-blue-600 font-medium hover:underline">
            Edit
          </button>
          <div class="h-10 border-l border-blue-600"></div>
          <button class="text-red-600 font-medium hover:underline">View</button>
        </div>
      </div>
    </div>
  );
}
