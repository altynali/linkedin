import { FC, PropsWithChildren } from 'react'
import { Header } from './header/Header'
import classes from './Layout.module.css'
import LeftSidebar from './leftSidebar/LeftSidebar'
import RightSidebar from './rightSidebar/RightSidebar'
import { Form } from '../../shared/components/form/Form'

export type LayoutProps = PropsWithChildren;

export const Layout: FC<LayoutProps> = ({ children }) => {

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.children}>
        <div className={classes.grid}>
          <LeftSidebar />
          <main className={classes.content}>
            <Form />
            {children}
          </main>
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}
