import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { GenereProvider } from './hooks/GenereContext'
import './styles/global.scss';

export function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <GenereProvider>
        <SideBar />
        <Content />
      </GenereProvider>
    </div>
  )
}