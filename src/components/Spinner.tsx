import React, { FC } from 'react';
import styled from '@emotion/styled';

import FadeLoader from 'react-spinners/FadeLoader';

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
      <FadeLoader color={'white'} loading={true} height={15} />
    </CenterSpinner>
  );
};

export default Spinner;
