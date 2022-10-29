import React from "react";

export default function AyushComponent() {
    return (
        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img
                className="object-cover w-full h-48 rounded-full"
                src="https://drive.google.com/file/d/12TInKEM-aPLxx2ZQ2uSapynBgnrrhkE4/view"
                alt="image"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                  Manohar Kumar P
                </h4>
                <p className="mb-2 leading-normal">
                I am a computer science engineering student at Amity University Lucknow campus. I’m currently in 3rd 
year. Computer Science engineering methodologies, tools, software packages, and procedures have become second nature 
to me as a result of my education. In addition, I have been interested in building up my communication skills which in 
turn made me to take part in various group discussions, debate and speech right from my childhood.
                </p>
                <div className="flex">
               <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow hover:text-[15px]">
                 <a href="https://github.com/man07har" target="blank">Git Hub</a>   
                </button>
                <div className="w-4"></div>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow hover:text-[15px]">
                <a href="https://www.linkedin.com/in/manohar-kumar-p-a18301217/" target="blank">LinkedIn</a>
                </button>
                <div className="w-4"></div>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 shadow  rounded hover:text-[15px]">
                <a href="https://twitter.com/Man07har" target="blank">Twitter</a>
                </button>
               </div>
            </div>
        </div>
    );
}