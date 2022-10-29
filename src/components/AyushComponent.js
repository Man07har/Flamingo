import React from "react";

export default function AyushComponent() {
    return (
        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img
                className="object-cover w-full h-48 rounded-full"
                src="https://drive.google.com/file/d/12YmX_n4KqE5_Qu6ky0hYZCgJw493rvd7/view?usp=drivesdk"
                alt="image"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                  Ayush Kumar Srivastava
                </h4>
                <p className="mb-2 leading-normal">
                    react tailwind css card with image It is a long established
                    fact that a reader will be distracted by the readable
                    content.
                </p>
                <div className="flex">
               <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow hover:text-[15px]">
               <a href="https://github.com/heroaks" target="blank">Git Hub</a>
                </button>
                <div className="w-4"></div>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow hover:text-[15px] ">
                <a href="https://www.linkedin.com/in/ayush-srivastava-150/" target="blank">LinkedIn</a>
                </button>
                <div className="w-4"></div>
               
               </div>
            </div>
        </div>
    );
}