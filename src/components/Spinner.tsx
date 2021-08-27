import React, { FC } from "react";
import styled from "@emotion/styled";

import PropagateLoader from "react-spinners/PropagateLoader";

const CenterSpinner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: #2c3553;
`;

const Spinner: FC = () => {
  return (
    <CenterSpinner>
      <PropagateLoader color={"white"} loading={true} size={15} />
    </CenterSpinner>
  );
};

export default Spinner;
