import Head from 'next/head'
import Image from 'next/image'
import { Searchbar, TopPlay, Discover, MusicPlayer } from '../components'
import { useSelector } from 'react-redux';

// import styles from '../styles/Home.module.css'

export default function Home() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <>
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Discover />
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
    </>
  )
}
