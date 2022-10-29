import React from "react";
import dpp_image from "./Profile Images/d_pp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function AyushComponent() {
  return (
    <div className="w-full rounded-lg shadow-md lg:max-w-sm">
      <div className="grid place-content-around ">
        <img
          className="object-cover flex justify-center w-48 h-48 rounded-full"
          src={dpp_image}
          alt="image"
        />
      </div>
      <div className="p-4">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
          Deepesh Gurnani
        </h4>
        <p className="mb-2 leading-normal">
          I am a pre-final year student at Amity University, Lucknow. My major
          is Computer Science and I do Problem Solving (Data Structures and
          Algorithms) for fun. I currently practice at Codeforces and Leetcode
          and participate in Leetcode contests using Java. I am well versed in
          Computer Science fundamentals like OOPS, Operating Systems, Database
          Management Systems, and Computer Networks. I have built a few projects
          on Web Development and python. I am interested and open to
          interviewing as an intern in Software Engineering.
        </p>
        <div className="flex flex-row">
          <button className="text-4xl rounded shadow m-2 hover:text-grey-500">
            <a href="https://github.com/Ironspider42" target="blank">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </button>

          <button className="text-4xl rounded shadow m-2 hover:text-blue-900">
            <a
              href="https://www.linkedin.com/in/deepesh-gurnani-29833b200/"
              target="blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
            </a>
          </button>

          <button className="text-4xl rounded shadow m-2 hover:text-blue-500">
            <a href="https://twitter.com/DeepeshGurnani3" target="blank">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
