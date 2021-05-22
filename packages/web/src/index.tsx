import { FC } from 'react'
import { render } from 'react-dom'

const App: FC = () => {
  return <p>Hello!</p>
}

render(<App />, document.getElementById('app'))
