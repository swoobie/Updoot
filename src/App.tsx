import React from 'react';
import './App.css';

const appName: string = "Updoot App";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>The {appName} is at your service!</h1>
          <h2>Though it's not able to do much now..</h2>
      </header>
        <div className="arrows">
            <UpVoteArrow />
            <div className="spacer" />
            <DownVoteArrow />
        </div>
    </div>
  );
}

function UpVoteArrow() {
    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        console.log("Upvote pressed");
    }

    return (
        <button onClick={handleClick} className={"arrow-button"}>
            <Arrow fill="#5F5" className={"arrow-upVote"}/>
        </button>
    );
}

function DownVoteArrow() {
    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        console.log("Downvote pressed");
    }

    return (
        <button onClick={handleClick} className={"arrow-button"}>
            <Arrow fill="#F55" className={"arrow-downVote"}/>
        </button>
    );
}

function Arrow({className, fill} : {className: string, fill: string}) {
    return (
        // All the extra SVG stuff was stripped using SVGOMG: https://jakearchibald.github.io/svgomg/
        <svg className={className} pointerEvents="bounding-box" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" clipRule="evenodd" viewBox="0 0 5692 4267">
            <path fill={fill} stroke="#000" strokeWidth="123.3" d="M2571 614c-244 79-695 713-856 925-56 75-166 237-369 585-72 123-131 263-65 302 113 68 563-70 647 38 70 89 26 1415 29 1458h1229s-43-1342 29-1458c72-117 534 30 647-38 65-39 7-179-65-302a6408 6408 0 00-369-585c-161-212-612-846-857-925"/>
        </svg>
    );
}

Arrow.defaultProps = {
    className: undefined,
    fill: '#333',
};

export default App;
