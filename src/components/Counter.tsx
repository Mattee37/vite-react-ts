import type { Component } from '../types'
import type { VFC } from 'react'

import { memo, useState } from 'react'
import { useDispatch } from 'react-redux'

import { deleteCounter } from '../redux/actions'

const Counter: VFC<Component> = ({ texto, adderValue, id }) => {
  const dispatch = useDispatch()

  const [state, setState] = useState<number>(0)

  return (
    <div className="caja">
      <p>{texto}</p>
      <h1>{state}</h1>
      <button
        className="boton botonAdd"
        onClick={() => setState(state + adderValue)}
      >
        +{adderValue}
      </button>
      <button
        className="boton botonRemove"
        onClick={() => dispatch(deleteCounter(id))}
      >
        Eliminar
      </button>
    </div>
  )
}

export default memo(Counter)
