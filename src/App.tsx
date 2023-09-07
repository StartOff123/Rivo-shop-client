import React from 'react'
import { BestSelling, Header, Preview } from './components'

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Preview />
      <BestSelling />
    </div>
  )
}

export default App