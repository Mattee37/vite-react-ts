import type { VFC } from 'react'

import { lazy, Suspense, memo } from 'react'

const ReactLogo = lazy(() => import('./ui/svg/ReactLogo'))

const Header: VFC = () => {
  return (
    <div className="encabezado">
      <Suspense fallback={<div>Loading Image...</div>}>
        <ReactLogo className="App-logo" />
      </Suspense>
      <h1 className="headerText">Contadores</h1>
    </div>
  )
}

export default memo(Header)
