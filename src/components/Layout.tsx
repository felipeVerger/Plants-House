import { FC, ReactNode } from 'react'
import Navbar from './Navbar'
import Hero from './HomeComponents/Hero'

interface LayoutProps {
  children: ReactNode
  showHero: boolean
}

const Layout: FC<LayoutProps> = ({children, showHero }) => {
  return (
    <div className='relative z-0'>
        <div className="green-gradient">
            <Navbar/>
            {showHero && <Hero/>}
        </div>
        {children}
    </div>
  )
}

export default Layout