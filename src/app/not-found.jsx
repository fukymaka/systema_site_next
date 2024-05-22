import Button from '@/components/Button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-lvh flex justify-center items-center'>
      <div className='h-1/2 flex flex-col justify-center items-center text-center'>
        <p className='h1'>404</p>
        <p className='h3'>Страница не найдена</p>
        <Button className='mt-10' href="/">Вернуться на главную</Button>
      </div>
    </div>
  )
}