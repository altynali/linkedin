import { Route, Routes } from "react-router-dom";
import { routes } from "../../pages/routes";
import { Loader } from "../../shared/components/loader/Loader";
import { Suspense,   } from "react"; 

const MainRouter = () => { 
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} Component={Component} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
