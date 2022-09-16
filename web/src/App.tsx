import { useEffect, useState } from 'react';
import {GameController, MagnifyingGlassPlus} from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import { GamerBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

import './styles/main.css';
import logoImg from './assets/logo.svg';

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
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>
          
          <Dialog.Content className='fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl text-white'>Publique um anúncio</Dialog.Title>

            
              <form className='mt-8'>
                <div className='flex flex-col gap-2'>
                  <label className='font-semibold' htmlFor='game'> Qual o game? </label>
                  <input id='game' placeholder='Selecione o seu game' />
                </div>

                <div>
                 <label htmlFor='game'> Qual o seu nome? </label>
                 <input type="number" placeholder='Como te chamam dentro do game' className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500' />
                </div>
                
                <div>
                  <div>
                   <label htmlFor='yearsPlaying'> Joga há qunatos anos? </label>
                   <input id='idYearsPlaying' placeholder='Tudo bem ser zero' />
                  </div>

                  <div>
                   <label htmlFor='discord'> Qual o seu discord? </label>
                   <input id='discord' type="text" placeholder='Usuario' />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor='weekDays'> Quando costuma jogar? </label>
                  </div>

                  <div>
                    <label htmlFor='discord'> Qual horario do dia? </label>
                    <div>
                      <input type="time" id="hoursStart" placeholder='De' />
                      <input type="time" id="hoursEnd" placeholder='Ate' />
                    </div>
                  </div>
                </div>   

                <div>
                  <input type="checkbox" />
                  Costumo me conectar no chat de voz
                </div>  
                <footer>
                  <button> Cancelar </button>
                  <button type='submit'> <GameController/> Encontrar Duo </button>
                </footer>             
              </form>
            
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      
    </div>

  )
}

export default App
