import { Layout } from "./providers/layout/Layout";
import ErrorBoundary from "./providers/errorBoundary";
import MainRouter from "./providers/router/MainRouter";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ErrorBoundary>
      <CssBaseline />
      <Layout>
        <MainRouter />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
