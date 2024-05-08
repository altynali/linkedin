import { CssBaseline } from '@mui/material'
import ErrorBoundary from './providers/errorBoundary'
import { Layout } from './providers/layout/Layout'
import MainRouter from './providers/router/MainRouter'

function App() {
  return (
    <ErrorBoundary>
      <CssBaseline />
      <Layout>
        <MainRouter />
      </Layout>
    </ErrorBoundary>
  )
}

export default App
