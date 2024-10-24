import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-10 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAABLS0vPz8+Wlpb29vZfX1+RkZHDw8M3Nzc0NDSCgoLU1NSkpKSFhYX8/Pzg4ODx8fF1dXUaGhqrq6vq6uq6uroXFxdmZmaxsbELCwtYWFgdHR2fn589PT3KyspxcXFEREQoKCh7e3tGlryJAAACdElEQVR4nO3d7VLCMBCF4QiUDxHLp4iIgN7/PWoHHfXPJm0ys7Pb97mCc6ZTStI0CQEAAAAAAAAAAAAAAAAA/Kunk/HAjvFkWrfqt/u4s+djl15woh22o0liv2qmnbSzWZVUcK+dM8M+peK9dsos9/GCc+2MmeaxgkvthNmWkYbP2gGzPcsFV9r5CliJDQ/a8Qo4iA3X2vEKWIsNbT8qbuQHxot2vAJexIba6YoQG2600xWwERseteMVcBQbWh03/SWPoR604xXwIDZ0cCO+ygXDQjtgtkWkofmLGLuE9u/EyF3Y2GpnzLKNFwzhpJ0ywymlYAhT7ZydTdMKhlDZHEStk+YSv+1Gb9p5W5qNWkx539TLoR3Ldm8tAAAAAAAAAACAKfV5MbJjcW7z3qnxNNB+l9Ta4KlFv+G7dtxO3s+pBR+1o3b2mFZwrJ0zwzil4EU7ZZZLvKD1ld7yKu8vlXbCbLHHht1fmR+RX5taO18B8qIFu4uFfsnLhqx/19WQv+26ascr4Co29PC9xV5sqJ2uiJ5fw6t2vALk+9DDb6n8yPf/PPT/n8b//9IejC38jw97MMbvwTyN5V+bxLm2HsyXBv9z3g3v7y0AAAAAAAAAAIAhzveJ8r7Xl9H92i7J75/sLhtK3HPP/b6J7ve+9L9/qfs9aP3vI2z9EkYv4lA7XwHyneh/T3b/++rbvw1jZyNopytCbOjhewv5jBL/58zYHDb9J58VZH2Vd0Ne6e3/zC7/56714Ow88992Rc8/tP7ASDjDsgfnkIbK2lTpr7SzZIPdMVTqecChB2c6h+ZzC9/ncgMAAAAAAAAAAAAAAACATZ8gAVacgh1jCwAAAABJRU5ErkJggg=="
          alt="hamburger"
        />
        <a href="/">
            <img
            className="h-10 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="youtube-logo"
            />
        </a>
      </div>
      <div className="col-span-10 px-10 rounded-lg">
        <input
          type="text"
          className="w-1/2 border border-gray-500 p-2 rounded-l-full"
        />
        <button className="bg-gray-300 text-white border border-gray-500 px-5 py-2 rounded-r-full">
          🔍
        </button>
      </div>
      <div>
        <img
          className="h-10"
          alt="user-icon"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        />
      </div>
    </div>
  );
};

export default HeaderComponent;
