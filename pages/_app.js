import Sidebar from '../components/Sidebar'
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        <div className="relative flex">
          <Sidebar/>
          {/* <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]"> */}
          <div className="flex-1 flex flex-col">
          <Component {...pageProps} />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default MyApp
