import React from "react";
import mpp_image from "./Profile Images/m_pp.jpg";
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
          src={mpp_image}
          alt="image"
        />
      </div>
      <div className="p-4">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
          Manohar Kumar P
        </h4>
        <p className="mb-2 leading-normal">
          I am a computer science engineering student at Amity University
          Lucknow campus. I'm currently in 3rd year. Computer Science
          engineering methodologies, tools, software packages, and procedures
          have become second nature to me.I'm always 
          interested in learning about new work prospects, therefore I'd be happy to 
          talk about engineering job internships and the topics that are technical for 
          that matter.
        </p>
        <div className="flex flex-row">
          <button className="text-4xl rounded shadow m-2 hover:text-grey-500">
            <a href="https://github.com/man07har" target="blank">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </button>

          <button className="text-4xl rounded shadow m-2 hover:text-blue-900">
            <a
              href="https://www.linkedin.com/in/manohar-kumar-p-a18301217/"
              target="blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
            </a>
          </button>

          <button className="text-4xl rounded shadow m-2 hover:text-blue-500">
            <a href="https://twitter.com/Man07har" target="blank">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
