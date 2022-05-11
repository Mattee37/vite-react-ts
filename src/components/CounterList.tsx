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
        Add counter!
      </StyledButton>
      {counters.length !== 0 ? (
        counters.map(({ text, value, id }) => (
          <Counter key={id} id={id} text={text} value={value} />
        ))
      ) : (
        <Message>You dont have counters yet!</Message>
      )}
    </>
  )
}

export default memo(CounterList)
