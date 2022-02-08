import React, { useState, useEffect } from "react";

const AutoComplete = ({ componentName }) => {
  const AutoCompleteList = [
    "antique",
    "apple",
    "banana",
    "rustic",
    "vinyl",
    "vintage",
    "refurbished",
    "신품",
    "빈티지",
    "중고A급",
    "중고B급",
    "골동품",
    "허민입니다.",
    "반갑습니다",
  ];

  const DropDown = ({
    dropDownOptions,
    autoCompleteClick,
    selectedOptionIdx,
  }) => {
    return (
      <ul className="block mx-auto list-none shadow-lg z-4 border rounded-b-lg">
        {dropDownOptions.map((item, idx) => (
          <li
            className={`${
              selectedOptionIdx === idx ? "bg-gray-100" : "bg-white"
            } hover:bg-gray-100 p-1 last: rounded-b-lg`}
            key={idx}
            onClick={() => autoCompleteClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };

  const [hasText, setHasText] = useState(false); //input값의 유무 상태
  const [inputValue, setInputValue] = useState(""); //input값의 상태
  const [dropDownOptions, setdropDownOptions] = useState(AutoCompleteList);
  //option의 상태는 input값을 포함하는 autocomplete 추천 항목 리스트를 확인하기 위함
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(-1); //키보드로 option 선택할때 필요한 selectedOption상태

  useEffect(() => {
    if (inputValue === "") {
      //처음 렌더링 됐을 때의 상태와, input값을 모두 지워줬을 때
      setHasText(false); //input값의 유무상태를 false(없음)으로
      setdropDownOptions([]); //option은 빈배열로 만들어서 아래에 리스트가 나타나지 않도록 구현
    } else if (inputValue !== "") {
      //input값을 입력하면
      setHasText(true);
      setdropDownOptions(
        AutoCompleteList.filter((element) => {
          //입력된 값을 포함하는 option만 걸러준 상태로 변경한다.
          if (element === inputValue) {
            setHasText(false);
          }
          return element.includes(inputValue);
        })
      );
    }
  }, [inputValue]);

  const inputChange = (event) => {
    //input값 변경 시 발생되는 이벤트 핸들러.
    setInputValue(event.target.value); //inputValue를 입력된 값으로 바꿔준다.
    // setHasText(true); //input값 유무상태도 당연히 true(있음)으로 바꿔준다.
  };

  const autoCompleteClick = (selectedOption) => {
    //DropDown 컴포넌트의 li엘리먼트에서 onClick으로 이벤트 핸들러 함수에 option을 전달해주고 있다.
    setInputValue(selectedOption); //전달받은 option으로 inputValue를 변경해준다.
    setSelectedOptionIdx(-1);
  };

  const deleteBtnClick = () => {
    //x 버튼 누르면
    setInputValue(""); //input입력창을 비워준다.
  };

  const dropDownKeyControl = (event) => {
    //option을 키보드로 선택할 수 있게해주는 핸들러 함수
    if (hasText) {
      //input에 값이 있을때
      if (
        event.key === "ArrowDown" &&
        dropDownOptions.length - 1 > selectedOptionIdx
      ) {
        setSelectedOptionIdx((prev) => prev + 1);
      }
      //dropDownOptions.length에 -1을 해주는 이유는 selectedOption의 최대값을 맞춰주기 위해서이다.
      //예를들어 밑에 option이 2개가 나왔다고 가정했을 때, selectedOption값이 최대 1까지 변할 수 있게 해줘야한다.
      //'ArrowDown'키를 누르면 selectedOption는 0이 되고, 한번 더 누르면 1이 되고, 그 다음은 더이상 옵션이 없기 때문에 키가 안먹히게 해주는 것이다.

      if (event.key === "ArrowUp" && selectedOptionIdx >= 0) {
        //처음 조건을 이해했다면 여기는 자연스럽게 이해될 것이다.
        setSelectedOptionIdx((prev) => prev - 1);
      }
      if (event.key === "Enter" && selectedOptionIdx >= 0) {
        //Enter키로 option 선택
        autoCompleteClick(dropDownOptions[selectedOptionIdx]);
        setSelectedOptionIdx(-1); //Enter키를 눌러서 선택이 되면 다시 selectedOption는 -1이 되야한다.
      }
    }
  };

  return (
    <section className="componentbg">
      <div>
        <h1 className="font-bold">{componentName}</h1>
      </div>
      <div className="w-[70%] m-auto mt-12">
        <div
          className={`flex justify-between p-1 border rounded-lg ${
            hasText && "focus-within:rounded-b-none"
          } focus-within:shadow-lg`}
        >
          <input
            type="text"
            value={inputValue}
            onChange={inputChange}
            onKeyUp={inputChange}
            onKeyDown={dropDownKeyControl}
            className="w-full outline-none"
          />
          <span className="cursor-pointer" onClick={deleteBtnClick}>
            &times;
          </span>
        </div>
        {hasText && (
          <DropDown
            dropDownOptions={dropDownOptions}
            autoCompleteClick={autoCompleteClick}
            selectedOptionIdx={selectedOptionIdx}
          />
        )}
      </div>
    </section>
  );
};

export default AutoComplete;
