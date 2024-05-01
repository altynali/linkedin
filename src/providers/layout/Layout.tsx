import { FC, PropsWithChildren } from "react"; 
import { Header } from "./header/Header";
import classes from "./Layout.module.css"; 
import LeftSidebar from "./leftSidebar/LeftSidebar";
import RightSidebar from "./rightSidebar/RightSidebar";

export type LayoutProps = PropsWithChildren;

export const Layout: FC<LayoutProps> = ({ children }) => {

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.children}>
        <div className={classes.grid}>
          <LeftSidebar/>
            {children}
          <RightSidebar/>
        </div>
      </div>
    </div>
  );
};
