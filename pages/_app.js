import { Searchbar, TopPlay, MusicPlayer, Sidebar } from '../components'

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <div>
        <div className="relative flex">
          <Sidebar/>
          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex flex-col bg-gradient-to-br from-[#31353A] to-[#46009D]">
              <Searchbar />

              <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
                <div className="flex-1 h-fit pb-40">
                  <Component {...pageProps} />
                </div>
                <div className="xl:sticky relative top-0 h-fit">
                  <TopPlay />
                </div>
              </div>
            </div>
            <MusicPlayer />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default MyApp
