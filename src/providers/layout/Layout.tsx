import { FC, PropsWithChildren } from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import classes from "./Layout.module.css";

export type LayoutProps = PropsWithChildren;

export const Layout: FC<LayoutProps> = ({ children }) => {

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.children}>
        {/* {fetchState === FetchState.Loading ? <Loader /> : children} */}
        {children}
      </div>
      <Footer />
    </div>
  );
};
