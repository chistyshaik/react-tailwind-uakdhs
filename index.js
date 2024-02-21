import React from 'react';
import { render } from 'react-dom';
import './style.css';
import cardsData from './data.json';

export default function App() {
  return (
    <div>
      {cardsData.syllabus.map((card, idx) => (
        <div key={card.chapter} className="mb-5 h-[200px] p-4 relative">
          <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-indigo-800 text-white flex">
            <div className="p-6">
              <p className="text-sm font-sans p-4">COURSE</p>
              <p className="text-base font-sans p-4">Javascript Fundamentals</p>
              <p className="font-sans text-xs p-4 mt-3">View All Chapters</p>
            </div>
            <div className="p-6 bg-white flex relative">
              <div className="text-indigo-800 font-semibold text-xl mt-3">
                <p className="text-sm font-sans">CHAPTER</p>
                <h1 className="font-sans">{card.module}</h1>
                <ul className="text-indigo-700">
                  {card.topics &&
                    card.topics.map((topic, index) => (
                      <li key={index} className="text-sm p-1">
                        {index + 1}
                        {'.'}
                        {topic}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="mt-3">
                <div className="relative">
                  <progress
                    id={`file-${idx}`}
                    value={card.courseCoverage}
                    max="100"
                    className="rounded p-1 mb-3"
                  ></progress>
                  <div>
                    <span className="text-sm text-indigo-700 absolute top-0 right-0 m-3">
                      {card.chapter} / {cardsData.syllabus.length} Chapters
                    </span>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="absolute right-0 bottom-0 inline-block bg-indigo-800 rounded-full px-3 py-1 text-sm font-semibold text-white shadow-lg m-5">
                    Continue
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

render(<App />, document.getElementById('root'));
