import React from "react";

export default function AyushComponent() {
    return (
        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img
                className="object-cover w-full h-48"
                src=""
                alt="image"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                  Deepesh Gurnani
                </h4>
                <p className="mb-2 leading-normal">
                I am a pre-final year student at Amity University, 
                Lucknow. My major is Computer Science and I do Problem 
                Solving (Data Structures and Algorithms) for fun. I currently
                 practice at Codeforces and Leetcode and participate in Leetcode
                  contests using Java. I am well versed in Computer Science 
                  fundamentals like OOPS, Operating Systems, Database Management 
                  Systems, and Computer Networks. I have built a few projects on Web
                   Development and python. I am interested and open to interviewing as
                    an intern in Software Engineering.
                </p>
                <div className="flex">
               <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow hover:text-[15px]">
               <a href="https://github.com/Ironspider42" target="blank">Git Hub</a>
                </button>
                <div className="w-4"></div>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow hover:text-[15px]">
                <a href="https://www.linkedin.com/in/deepesh-gurnani-29833b200/" target="blank">LinkedIn</a>
                </button>
                <div className="w-4"></div>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow hover:text-[15px]">
                <a href="https://twitter.com/DeepeshGurnani3" target="blank">Twitter</a>
                </button>
               </div>
            </div>
        </div>
    );
}