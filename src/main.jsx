import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyles.jsx'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </QueryClientProvider>,
)
