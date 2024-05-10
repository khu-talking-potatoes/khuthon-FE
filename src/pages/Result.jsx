import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetAnswerGemini, useGetSummary, useGetSummary4 } from "../hooks/ai";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import TypewriterComponent from "typewriter-effect";

const ResultPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const start = performance.now();
  const [prompt, setPrompt] = useState();
  const currentAI = state?.selected?.sort()
  //const isLoading = true
  //const isLoadingGem = true
  //const { isLoadingGem, errorGem, resultGem } = useGetAnswerGemini(prompt);
  const { isLoading4, result4 } = useGetSummary4(prompt);
  const { isLoading, error, result } = useGetSummary();
  const [responseTime, setResponseTime] = useState();
  const [responseTime2, setResponseTime2] = useState();
  useEffect(() => {
    setPrompt(state.data);
    if (error) {
      console.error(error);
      alert("답변을 받아오는데 실패했습니다. 다시 입력해주세요")
      navigate("/")
    }
  });
  useEffect(() => {
    const end = performance.now();
    setResponseTime(end - start);
  }, [result]);

  useEffect(() => {
    const end2 = performance.now();
    setResponseTime2(end2 - start);
  }, [result4])
  return (
    <>
      <Background>
        <TopContainer>
        <div>💡 {state.data}</div>
        </TopContainer>
        <AnswerContainer>
          <Column>
            <FirstAnswer>
              {isLoading ? (
                <Loading loadingText="" />
              ) : (
                <>
                  <TypewriterComponent
                    options={{
                      strings: result,
                      autoStart: true,
                      delay: 10,
                    }}
                  />
                  응답시간 : {responseTime?.toFixed(1)}s
                </>
              )}
            </FirstAnswer>
          </Column>
          <Column>
            <SecondAnswer>
              {isLoading4 ? (
                <Loading loadingText="" />
              ) : (
                <>
                  <TypewriterComponent
                    options={{
                      strings: result4,
                      autoStart: true,
                      delay: 10,
                    }}
                  />
                  응답시간 : {responseTime2?.toFixed(1)}s
                </>
              )}
            </SecondAnswer>
          </Column>
        </AnswerContainer>
      </Background>
    </>
  );
};
export default ResultPage;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  background: #6bd19c;
`;

const TopContainer = styled.div`
  width: calc(90vw - 10px);
  padding: 20px;
  background: white;
  border-radius: 10px;
`;

const AnswerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  gap: 10px;
  min-height: 50vh;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
`;

const FirstAnswer = styled.div`
  display: flex;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  box-shadow: 9px 9px 30px 0px rgba(0, 0, 0, 0.08);
  min-height: 50vh;
  width: 40vw;
  margin: auto;
`;

const SecondAnswer = styled(FirstAnswer)``;
