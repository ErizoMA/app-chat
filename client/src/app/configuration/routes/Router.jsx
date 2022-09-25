import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import ROUTES from './Routes'
function RoutesPage () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTES.CHATS} element={<h1>Chat</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesPage
