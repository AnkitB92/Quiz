import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <main className='bg-neutral-100'>
        <Outlet />
      </main>
    </>
  )
}

export default App
