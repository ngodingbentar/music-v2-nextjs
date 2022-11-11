import { Searchbar, TopPlay, Discover, MusicPlayer, Sidebar } from '../components'

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { activeSong } = store.getState().player;

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
            {activeSong?.title && (
              <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
                <MusicPlayer />
              </div>
            )}
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default MyApp
