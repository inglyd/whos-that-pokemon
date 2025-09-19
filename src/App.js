import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App;
