import { useEffect, useState } from 'react';
import {GameController, MagnifyingGlassPlus} from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import { GamerBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

import './styles/main.css';
import logoImg from './assets/logo.svg';
import { Input } from './components/Form/Input';

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

            
              <form className='mt-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <label className='font-semibold' htmlFor='game'> Qual o game? </label>
                  <Input id='game' placeholder='Selecione o seu game' />
                </div>

                <div className='flex flex-col gap-2'>
                 <label htmlFor='game'> Qual o seu nome? </label>
                 <Input id="game" placeholder='Selecione o game que deseja jogar' />
                </div>
                
                <div className='grid grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-2'>
                   <label htmlFor='yearsPlaying'> Joga há qunatos anos? </label>
                   <Input id='idYearsPlaying' placeholder='Tudo bem ser zero' />
                  </div>

                  <div className='flex flex-col gap-2'>
                   <label htmlFor='discord'> Qual o seu discord? </label>
                   <Input id='discord' type="text" placeholder='Usuario' />
                  </div>
                </div>
                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='weekDays'> Quando costuma jogar? </label>
                    <div className='grid grid-cols-4 gap-2'>
                      <button 
                        title='Domingo'
                        className='w-8 h-8 rounded bg-zinc-900'
                      >
                        D
                      </button>
                      <button 
                        title='Segunda'
                        className='w-8 h-8 rounded bg-zinc-900'
                      >
                        S
                      </button>
                      <button
                        className='w-8 h-8 rounded bg-zinc-900' 
                        title='Terça'>T
                       
                      </button>
                      
                      <button
                        className='w-8 h-8 rounded bg-zinc-900' 
                        title='Quarta'>Q
                      
                      </button>
                      <button
                      className='w-8 h-8 rounded bg-zinc-900' 
                      title='Quinta'>Q
                      
                      </button>
                      <button 
                        className='w-8 h-8 rounded bg-zinc-900'
                        title='Sexta'>S
                        
                      </button>
                      
                      <button
                        className='w-8 h-8 rounded bg-zinc-900' 
                        title='Sábado'>                       S
                      </button>
                    </div>
                  </div>

                  <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor='discord'> Qual horario do dia? </label>
                    <div className='grid grid-cols-2 gap-2'>
                      <Input type="time" id="hoursStart" placeholder='De' />
                      <Input type="time" id="hoursEnd" placeholder='Ate' />
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
