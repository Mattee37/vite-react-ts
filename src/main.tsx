import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'

import Spinner from './components/Spinner'

import './styles/App.css'

const App = lazy(() => import('./App'))

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
