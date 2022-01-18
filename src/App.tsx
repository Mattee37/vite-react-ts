import { VFC } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { store, persistor } from './redux/store'
import Header from './components/Header'
import CounterList from './components/CounterList'
import Spinner from './components/Spinner'

const App: VFC = () => {
  return (
    <div className="grid">
      <Header />
      <Provider store={store}>
        <PersistGate loading={<Spinner />} persistor={persistor}>
          <CounterList />
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App
