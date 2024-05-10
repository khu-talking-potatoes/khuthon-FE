import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const GeminiCard = () => {
  return (
    <>
      <Container>
        <motion.div
          className="card"
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => {}}
          onHoverEnd={() => {}}
        >
          <CardHeader>
            <div className="icon">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z"
                  fill="url(#prefix__paint0_radial_980_20147)"
                />
                <defs>
                  <radialGradient
                    id="prefix__paint0_radial_980_20147"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)"
                  >
                    <stop offset=".067" stopColor="#9168C0" />
                    <stop offset=".343" stopColor="#5684D1" />
                    <stop offset=".672" stopColor="#1BA1E3" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </CardHeader>
          <CardBody>
            <span>Gemini</span>
          </CardBody>
        </motion.div>
      </Container>
    </>
  );
};
GeminiCard.propsTypes = {
  ai: PropTypes.string,
};
export default GeminiCard;

const Container = styled.div`
  .card {
    width: 200px;
    height: 250px;
    background: white;
    border-radius: 20px;
  }
`;

const CardHeader = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    width: 100px;
    height: 100px;
  }
`;

const CardBody = styled.div`
  text-align: center;
`;
