import type { Store } from '../types'
import type { VFC } from 'react'

import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addCounter } from '../redux/actions'

import Counter from './Counter'
import Message from './ui/Message'
import StyledButton from './ui/StyledButton'

const CounterList: VFC = () => {
  const counters = useSelector((state: Store) => state.counters)
  const dispatch = useDispatch()

  return (
    <>
      <StyledButton onClick={() => dispatch(addCounter())}>
        Agregar contador!
      </StyledButton>
      {counters.length !== 0 ? (
        counters.map(({ texto, adderValue, id }) => (
          <Counter key={id} adderValue={adderValue} id={id} texto={texto} />
        ))
      ) : (
        <Message>Aún no hay contadores!</Message>
      )}
    </>
  )
}

export default memo(CounterList)
