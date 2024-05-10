import Spinner from "../assets/images/Rolling.gif";
import styled from "styled-components";
import PropTypes from "prop-types";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  line-height: normal;
  margin-top: 15vh;
`;

export default function Loading({ loadingText }) {
  // 룰렛으로 데이터 전달
  return (
      <LoadingContainer>
        <img src={Spinner} alt="로딩" width="40%" />
        {loadingText}
      </LoadingContainer>
  );
}

Loading.propTypes = {
  loadingText: PropTypes.string,
};
