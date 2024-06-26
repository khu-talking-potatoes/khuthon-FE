import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetSummary, useGetSummary4 } from "../hooks/ai";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import TypewriterComponent from "typewriter-effect";
import { postImage } from "../hooks/similar";
import Spinner from "../assets/images/Rolling.gif";

const ResultPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [prompt, setPrompt] = useState();
  const [similar, setSimilar] = useState(false);
  const [length, setLength] = useState(false);
  //const isLoading = true
  //const isLoadingGem = true
  //const { isLoadingGem, errorGem, resultGem } = useGetAnswerGemini(prompt);
  const { isLoading4, result4 } = useGetSummary4(prompt);
  const { isLoading, error, result } = useGetSummary(prompt);
  //const { isLoadingSim, errorSim, similar, length } = usePostImage(apiInput);

  const treeCalc = (token) => {
    const numberToTree = Math.ceil((1000 / Number(token)) * 50);
    return numberToTree;
  };
  useEffect(() => {
    setPrompt(state.data);
    if (error) {
      console.error(error);
      alert("답변을 받아오는데 실패했습니다. 다시 입력해주세요");
      navigate("/");
    }
  });
  useEffect(() => {
    if (result4?.length > 10) {
      console.log("yes");
      postImage(result4, result).then((res) => {
        console.log(res);
        setLength(res.data.len2);
        setSimilar(Number(res.data.similarity.toFixed(2)) * 100);
      });
    }
  }, [result4]);
  return (
    <>
      <Background>
        <Logo>
        ｓｕｓｔＡＩｎａｂｌｅ
          <div className="leaf-icon">
            <svg
              fill="#ffffff"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 551.391 551.391"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M413.695,0c0,0-45.366,44.014-94.43,61.759C-44.068,193.178,109.165,449.277,114.164,450.121
		c0,0,20.374-35.48,47.896-55.717c174.644-128.389,210.14-276.171,210.14-276.171s-39.19,177.829-194.562,288.479
		c-34.316,24.426-57.552,84.568-67.388,144.679c0,0,24.325-9.828,34.785-12.49c4.079-26.618,12.607-52.106,27.025-74.875
		c217.151,25.854,288.272-149.123,297.563-210.136C491.552,109.79,413.695,0,413.695,0z"
                />
              </g>
            </svg>
          </div>
        </Logo>
        <TopContainer>
          <div>💡 {state.data}</div>
        </TopContainer>
        <AnswerContainer>
          <Column>
            <FirstAnswer>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 512 512"
                >
                  <rect
                    fill="#10A37F"
                    width="512"
                    height="512"
                    rx="104.187"
                    ry="105.042"
                  />
                  <path
                    fill="#fff"
                    fillRule="nonzero"
                    d="M378.68 230.011a71.432 71.432 0 003.654-22.541 71.383 71.383 0 00-9.783-36.064c-12.871-22.404-36.747-36.236-62.587-36.236a72.31 72.31 0 00-15.145 1.604 71.362 71.362 0 00-53.37-23.991h-.453l-.17.001c-31.297 0-59.052 20.195-68.673 49.967a71.372 71.372 0 00-47.709 34.618 72.224 72.224 0 00-9.755 36.226 72.204 72.204 0 0018.628 48.395 71.395 71.395 0 00-3.655 22.541 71.388 71.388 0 009.783 36.064 72.187 72.187 0 0077.728 34.631 71.375 71.375 0 0053.374 23.992H271l.184-.001c31.314 0 59.06-20.196 68.681-49.995a71.384 71.384 0 0047.71-34.619 72.107 72.107 0 009.736-36.194 72.201 72.201 0 00-18.628-48.394l-.003-.004zM271.018 380.492h-.074a53.576 53.576 0 01-34.287-12.423 44.928 44.928 0 001.694-.96l57.032-32.943a9.278 9.278 0 004.688-8.06v-80.459l24.106 13.919a.859.859 0 01.469.661v66.586c-.033 29.604-24.022 53.619-53.628 53.679zm-115.329-49.257a53.563 53.563 0 01-7.196-26.798c0-3.069.268-6.146.79-9.17.424.254 1.164.706 1.695 1.011l57.032 32.943a9.289 9.289 0 009.37-.002l69.63-40.205v27.839l.001.048a.864.864 0 01-.345.691l-57.654 33.288a53.791 53.791 0 01-26.817 7.17 53.746 53.746 0 01-46.506-26.818v.003zm-15.004-124.506a53.5 53.5 0 0127.941-23.534c0 .491-.028 1.361-.028 1.965v65.887l-.001.054a9.27 9.27 0 004.681 8.053l69.63 40.199-24.105 13.919a.864.864 0 01-.813.074l-57.66-33.316a53.746 53.746 0 01-26.805-46.5 53.787 53.787 0 017.163-26.798l-.003-.003zm198.055 46.089l-69.63-40.204 24.106-13.914a.863.863 0 01.813-.074l57.659 33.288a53.71 53.71 0 0126.835 46.491c0 22.489-14.033 42.612-35.133 50.379v-67.857c.003-.025.003-.051.003-.076a9.265 9.265 0 00-4.653-8.033zm23.993-36.111a81.919 81.919 0 00-1.694-1.01l-57.032-32.944a9.31 9.31 0 00-4.684-1.266 9.31 9.31 0 00-4.684 1.266l-69.631 40.205v-27.839l-.001-.048c0-.272.129-.528.346-.691l57.654-33.26a53.696 53.696 0 0126.816-7.177c29.644 0 53.684 24.04 53.684 53.684a53.91 53.91 0 01-.774 9.077v.003zm-150.831 49.618l-24.111-13.919a.859.859 0 01-.469-.661v-66.587c.013-29.628 24.053-53.648 53.684-53.648a53.719 53.719 0 0134.349 12.426c-.434.237-1.191.655-1.694.96l-57.032 32.943a9.272 9.272 0 00-4.687 8.057v.053l-.04 80.376zm13.095-28.233l31.012-17.912 31.012 17.9v35.812l-31.012 17.901-31.012-17.901v-35.8z"
                  />
                </svg>
              </div>
              {isLoading ? (
                <Loading loadingText="" />
              ) : (
                <TypeContainer>
                  <TypewriterComponent
                    options={{
                      strings: result,
                      autoStart: true,
                      delay: 10,
                    }}
                  />
                </TypeContainer>
              )}
            </FirstAnswer>
          </Column>
          <Column>
            <SecondAnswer>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 512 512"
                >
                  <rect
                    fill="#000000"
                    width="512"
                    height="512"
                    rx="104.187"
                    ry="105.042"
                  />
                  <path
                    fill="#fff"
                    fillRule="nonzero"
                    d="M378.68 230.011a71.432 71.432 0 003.654-22.541 71.383 71.383 0 00-9.783-36.064c-12.871-22.404-36.747-36.236-62.587-36.236a72.31 72.31 0 00-15.145 1.604 71.362 71.362 0 00-53.37-23.991h-.453l-.17.001c-31.297 0-59.052 20.195-68.673 49.967a71.372 71.372 0 00-47.709 34.618 72.224 72.224 0 00-9.755 36.226 72.204 72.204 0 0018.628 48.395 71.395 71.395 0 00-3.655 22.541 71.388 71.388 0 009.783 36.064 72.187 72.187 0 0077.728 34.631 71.375 71.375 0 0053.374 23.992H271l.184-.001c31.314 0 59.06-20.196 68.681-49.995a71.384 71.384 0 0047.71-34.619 72.107 72.107 0 009.736-36.194 72.201 72.201 0 00-18.628-48.394l-.003-.004zM271.018 380.492h-.074a53.576 53.576 0 01-34.287-12.423 44.928 44.928 0 001.694-.96l57.032-32.943a9.278 9.278 0 004.688-8.06v-80.459l24.106 13.919a.859.859 0 01.469.661v66.586c-.033 29.604-24.022 53.619-53.628 53.679zm-115.329-49.257a53.563 53.563 0 01-7.196-26.798c0-3.069.268-6.146.79-9.17.424.254 1.164.706 1.695 1.011l57.032 32.943a9.289 9.289 0 009.37-.002l69.63-40.205v27.839l.001.048a.864.864 0 01-.345.691l-57.654 33.288a53.791 53.791 0 01-26.817 7.17 53.746 53.746 0 01-46.506-26.818v.003zm-15.004-124.506a53.5 53.5 0 0127.941-23.534c0 .491-.028 1.361-.028 1.965v65.887l-.001.054a9.27 9.27 0 004.681 8.053l69.63 40.199-24.105 13.919a.864.864 0 01-.813.074l-57.66-33.316a53.746 53.746 0 01-26.805-46.5 53.787 53.787 0 017.163-26.798l-.003-.003zm198.055 46.089l-69.63-40.204 24.106-13.914a.863.863 0 01.813-.074l57.659 33.288a53.71 53.71 0 0126.835 46.491c0 22.489-14.033 42.612-35.133 50.379v-67.857c.003-.025.003-.051.003-.076a9.265 9.265 0 00-4.653-8.033zm23.993-36.111a81.919 81.919 0 00-1.694-1.01l-57.032-32.944a9.31 9.31 0 00-4.684-1.266 9.31 9.31 0 00-4.684 1.266l-69.631 40.205v-27.839l-.001-.048c0-.272.129-.528.346-.691l57.654-33.26a53.696 53.696 0 0126.816-7.177c29.644 0 53.684 24.04 53.684 53.684a53.91 53.91 0 01-.774 9.077v.003zm-150.831 49.618l-24.111-13.919a.859.859 0 01-.469-.661v-66.587c.013-29.628 24.053-53.648 53.684-53.648a53.719 53.719 0 0134.349 12.426c-.434.237-1.191.655-1.694.96l-57.032 32.943a9.272 9.272 0 00-4.687 8.057v.053l-.04 80.376zm13.095-28.233l31.012-17.912 31.012 17.9v35.812l-31.012 17.901-31.012-17.901v-35.8z"
                  />
                </svg>
              </div>
              {isLoading4 ? (
                <Loading loadingText="" />
              ) : (
                <TypeContainer>
                  <TypewriterComponent
                    options={{
                      strings: result4,
                      autoStart: true,
                      delay: 10,
                    }}
                  />
                </TypeContainer>
              )}
            </SecondAnswer>
          </Column>
        </AnswerContainer>
        <InfoContainer>
          {(isLoading4 || !similar) && (
            <LoadingContainer>
              <img src={Spinner} alt="로딩" />
              <TypewriterComponent
                options={{
                  strings: [
                    "일론 머스크가 내년에는 AI를 구동하기 위한 전력이 부족할 것이라고 언급했어요.",
                    "애널리스트들은 ChatGPT의 일일 전력 사용료가 하루 9억 원에 달한다고 분석했어요.",
                    "GPT-4를 학습 시키기 위해 발생한 탄소량은 GPT-3보다 나무 160만 그루 어치 더 많대요.",
                  ],
                  autoStart: true,
                  delay: 20,
                  loop: true,
                }}
              />
            </LoadingContainer>
          )}
          {(!isLoading4 && similar) && (
            <Analytics>
              <Icon id="1">📝</Icon>
              <div>
                <h2>분석결과</h2>
                <p>답변 유사도는 {similar}%이고,</p>
                <span>
                  같은 요청을 {treeCalc(length)}회만큼 하면 나무🌲 1그루를 심을
                  수 있어요!
                </span>
              </div>

              <Icon id="2">🌲</Icon>
            </Analytics>
          )}
        </InfoContainer>
      </Background>
    </>
  );
};
export default ResultPage;

const Logo = styled.div`
  font-size: 48px;
  color: white;
  position: relative;
  .leaf-icon {
    position: absolute;
    top: -20px;
    right: -60px;
  }
`;

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
  width: 70vw;
  padding: 20px;
  background: white;
  border-radius: 10px;
  font-size: 20px;
`;

const AnswerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 40px;
  min-height: 50vh;
  width: 70vw;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
`;

const FirstAnswer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  align-items: center;
  box-shadow: 9px 9px 30px 0px rgba(0, 0, 0, 0.08);
  min-height: 50vh;
  width: 30vw;
  margin: auto;
  .icon {
    width: 80px;
    margin-bottom: 10px;
  }
`;

const SecondAnswer = styled(FirstAnswer)``;

const InfoContainer = styled.div`
  background: white;
  width: 70vw;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  width: 65vw;
  font-size: 18px;
  img {
    width: 80px;
  }
`;

const Analytics = styled.div`
  h2 {
    margin-top: 0;
  }
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const Icon = styled.div`
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TypeContainer = styled.div`
  font-size: 20px;
`;
