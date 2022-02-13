import React, { useState } from "react";

const Tag = ({ componentName }) => {
  const MAX_TAG_NUM = 5;

  const [tags, setTags] = useState([]);
  const addTags = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      if (tags.length >= MAX_TAG_NUM) {
        alert("태그 갯수는 5개를 넘길 수 없습니다!");
      } else {
        if (tags.includes(e.target.value)) {
          alert("중복 태그는 입력하실 수 없습니다.");
        } else {
          setTags([...tags, e.target.value]);
          e.target.value = "";
        }
      }
    }
  };

  const removeTags = (idx) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== idx)]);
  };
  return (
    <section className="componentbg">
      <div>
        <h1 className="font-bold">{componentName}</h1>
      </div>
      <div className="flex justify-center mt-14">
        <div className="flex justify-start flex-wrap min-h-[48px] w-[480px] px-[8px] border rounded-lg bg-white focus-within:border-purple-700">
          <ul className="flex flex-wrap p-0">
            {tags.map((tag, idx) => (
              <li
                className="flex align-middle justify-center w-auto h-[32px] px-2 ml-2 mt-2 text-whitelist-none rounded-lg bg-purple-700 text-white"
                key={idx}
              >
                <span className="mt-1 w-10 truncate text-sm">{tag}</span>
                <span
                  className="block w-[16px] h-[16px] leading-[14px] text-center ml-2 mt-2 bg-white text-purple-700 rounded-full cursor-pointer"
                  onClick={() => removeTags(idx)}
                >
                  x
                </span>
              </li>
            ))}
          </ul>
          <input
            className="flex-1 h-[46px] pt-[4px] ml-2 outline-none focus:outline-transparent bg-white focus:border-purple-700"
            type="text"
            onKeyUp={(event) => addTags(event)}
            placeholder="Press enter to add tags"
          />
        </div>
      </div>
    </section>
  );
};

export default Tag;
