import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactTextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";
import TypewriterComponent from "typewriter-effect";
import AICard from "../components/AICard";
import GeminiCard from "../components/GeminiCard";
import GPT4Card from "../components/GPT4Card";

const Landing = () => {
  const navigate = useNavigate();
  const [userPrompt, setUserPrompt] = useState("");
  const [selected, setSelected] = useState([]);
  const textareaProps = {
    className: "input",
    placeholder: "질문을 입력해주세요.",
    maxLength: 500,
    onChange: (e) => setUserPrompt(e.target.value),
    value: userPrompt,
  };

  const handleClickCard = (type) => {
    if (selected.includes(type)){
      const newSelect = selected.filter((elem) => elem !== type);
      setSelected(newSelect)
      return
    }
    const newSelect = [...selected, type]
    setSelected(newSelect)
  };

  const handleClickNext = async () => {
    // 입력 내용 유효성 검사
    if (userPrompt === "") {
      alert("질문할 내용을 입력해주세요.");
      return;
    }
    // 인사이트 제목, 요약, 키워드 요청
    navigate("/result", {
      state: {
        data: userPrompt,
        selected: selected,
      },
    });
  };
  return (
    <>
      <Background>
        <TypewriterContainer>
          <TypewriterComponent
            options={{
              strings: [
                "<span style='color:white'>당신에게 알맞은 ai를 찾고</span>",
                "<span style='color: white'>환경 보호에 한 걸음 가까워질 수 있습니다.</span",
              ],
              autoStart: true,
              delay: 50,
              loop: true,
            }}
          />
        </TypewriterContainer>

        <InputContainer>
          <ReactTextareaAutosize {...textareaProps} />
          <div className="button" onClick={handleClickNext}>
            <svg
              width="12"
              height="20"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.95833 7.37565C8.95833 7.51671 8.93392 7.64692 8.88509 7.76628C8.83084 7.88563 8.74946 7.99957 8.64095 8.10807L2.30143 14.3092C2.11697 14.4883 1.89453 14.5778 1.63411 14.5778C1.45508 14.5778 1.29503 14.5344 1.15397 14.4476C1.00749 14.3662 0.890842 14.255 0.804036 14.1139C0.717231 13.9729 0.673828 13.8128 0.673828 13.6338C0.673828 13.3788 0.774197 13.1509 0.974935 12.9502L6.68783 7.37565L0.974936 1.80111C0.774198 1.60037 0.673829 1.36979 0.673829 1.10937C0.673829 0.935763 0.717232 0.778428 0.804038 0.637369C0.890843 0.490885 1.00749 0.376952 1.15397 0.295572C1.29503 0.208767 1.45508 0.165364 1.63412 0.165364C1.89453 0.165364 2.11697 0.257595 2.30143 0.442057L8.64095 6.64323C8.74946 6.75174 8.83084 6.86567 8.88509 6.98503C8.93392 7.10438 8.95833 7.23459 8.95833 7.37565Z"
                fill="#7F7F7F"
              />
            </svg>
          </div>
        </InputContainer>
        <CardContainer>
          <Line className={selected.includes("gpt3.5") ? "selected" : ""} onClick={()=>handleClickCard("gpt3.5")}>
            <AICard
              selected={selected}
              setSelected={setSelected}
            />
          </Line>
          <Line className={selected.includes("gpt4") ? "selected" : ""} onClick={()=>handleClickCard("gpt4")}>
            <GPT4Card />
          </Line>
          <Line className={selected.includes("gemini") ? "selected" : ""} onClick={()=>handleClickCard("gemini")}>
            <GeminiCard />
          </Line>
        </CardContainer>
      </Background>
    </>
  );
};
export default Landing;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #6bd19c;
`;

const TypewriterContainer = styled.div`
  font-size: 32px;
  color: white;
  margin-bottom: 50px;
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 20px;
  .input {
    height: 100%;
    width: 80vw;
    min-height: 50px;
    border: none;
    outline: none;
    padding: 14px 16px ${(props) => (props.counter ? "30px" : "14px")};
    background: #ffffff;
    color: #161616;
    border-radius: 8px;
    resize: none;
    flex: 1;
    &::-webkit-scrollbar {
      display: none;
    }
    font-size: 18px;
  }
  .button {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 0px;
    top: 12px;
    cursor: pointer;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  .selected {
    border: 3px solid #0F352C;
  }
`;

const Line = styled.div`
  width: 200px;
  height: 250px;
  border-radius: 22px;
  border: 3px solid #6bd19c;
`;