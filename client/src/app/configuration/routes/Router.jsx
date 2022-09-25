import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Chat from '../../pages/Chat'
import Home from '../../pages/Home'
import ROUTES from './Routes'
function RoutesPage () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTES.CHATS} element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesPage
