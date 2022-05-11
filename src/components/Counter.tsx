import type { Component } from '../types'
import type { VFC } from 'react'

import { memo } from 'react'
import { useDispatch } from 'react-redux'

import { deleteCounter, addValue } from '../redux/actions'

const Counter: VFC<Component> = ({ text, value, id }) => {
  const dispatch = useDispatch()

  return (
    <div className="caja">
      <p>{text}</p>
      <h1>{value}</h1>
      <button className="boton botonAdd" onClick={() => dispatch(addValue(id))}>
        +1
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
