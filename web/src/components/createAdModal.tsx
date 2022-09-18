import { useEffect, useState } from 'react';
import {Check, GameController, MagnifyingGlassPlus} from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import { Input } from './Form/Input';
import * as Checkbox  from '@radix-ui/react-checkbox';

interface Game {
    id: string;
    title: string;
  }

export function CreateAdModal() {

    const [games, setGames] = useState<Game[]>([]);
    useEffect(() => {
    fetch('http://localhost:3330/games')
    .then(response => response.json())
    .then(data => {
      setGames(data)
    })
  }, [])

    return(
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>
          
          <Dialog.Content className='fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl text-white'>Publique um anúncio</Dialog.Title>

            
              <form className='mt-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <label className='font-semibold' htmlFor='game'> Qual o game? </label>
                  <select 
                    id='game' 
                    placeholder='Selecione o seu game' 
                    className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none' 
                  >
                    <option value="Qual game deseja jogar?"></option>

                    { games.map(game => {
                        return(
                            <option key={game.id} value={game.id}> {game.title} </option>
                        )
                    })}
                  </select>
                </div>

                <div className='flex flex-col gap-2'>
                 <label htmlFor='game'> Qual o seu nome? </label>
                 <Input 
                    id="game" 
                    placeholder='Qual o seu nome'
                    
                 />                 
                </div>
                
                <div className='grid grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-2'>
                   <label htmlFor='yearsPlaying'> Joga há quantos anos? </label>
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

                <div className='mt-2 flex items-center gap-2 text-sm'>
                  <Checkbox.Root className='w-6 p-1 h-6 rounded bg-zinc-900'>
                    <Checkbox.Indicator>
                        <Check className='w-4 h-4 text-emerald-400' />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  Costumo me conectar ao chat de voz
                </div>  
                
                <footer className='mt-4 flex justify-end gap-4'>
                  <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold'> Cancelar </Dialog.Close>
                  <button type='submit' className='flex items-center gap-3 bg-violet-500 px-5 h-12 rounded-md font-semibold'> <GameController className='w-6 h-6'/> Encontrar Duo </button>
                </footer>             
              </form>
            
          </Dialog.Content>
        </Dialog.Portal>
    )
}