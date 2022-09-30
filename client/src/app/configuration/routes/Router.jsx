import { Route, Routes } from 'react-router-dom'
import Chat from '../../pages/Chat'
import Home from '../../pages/Home'
import ProtectedRoute from '../ProtectedRoute'
import ROUTES from './Routes'
function RoutesPage () {
  return (
    <Routes>
      <Route index element={<Home />} />
      {/* <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.CHATS} element={<Chat />} />
      </Route> */}
      <Route path={ROUTES.CHATS} element={<Chat />} />
    </Routes>
  )
}

export default RoutesPage
