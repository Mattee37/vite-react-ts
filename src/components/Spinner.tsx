import type { VFC } from 'react'

import { memo } from 'react'
import styled from '@emotion/styled'
import FadeLoader from 'react-spinners/FadeLoader'

const CenterSpinner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: #2c3553;
`

const Spinner: VFC = () => {
  return (
    <CenterSpinner>
      <FadeLoader color={'white'} height={15} loading={true} />
    </CenterSpinner>
  )
}

export default memo(Spinner)
