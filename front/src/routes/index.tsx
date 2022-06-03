import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import StreamInfo from './StreamInfo'
import FavoriteList from './FavoriteList'
import styles from './routes.module.scss'
import Layout from 'components/Layout'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='streaminfo' element={<StreamInfo />} />
          <Route path='streaminfo/:id/:date' element={<StreamInfo />} />
          <Route path='favorites' element={<FavoriteList />} />
          <Route path='*' element={<div>404</div>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
