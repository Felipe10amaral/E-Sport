import { useEffect, useState } from 'react';
import {GameController, MagnifyingGlassPlus} from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import { GamerBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

import './styles/main.css';
import logoImg from './assets/logo.svg';
import { Input } from './components/Form/Input';
import { CreateAdModal } from './components/createAdModal';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    fetch('http://localhost:3330/games')
    .then(response => response.json())
    .then(data => {
      setGames(data)
    })
  }, [])
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20 '>
      <img src={logoImg} alt="" />
      <h1 className='text-6xl text-white font-black mt-20 '>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>DUO</span> está aqui</h1>
    
      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GamerBanner 
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          )
        })}  
      </div>
      
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
      
    </div>

  )
}

export default App
