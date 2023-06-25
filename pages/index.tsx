import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='rounded-2xl bg-white shadow-xl p-10 w-80'>
      <p className='font-bold pb-2 text-2xl'>Select Item</p>
      <div className='flex flex-row justify-between py-2'>
        <p className='text-gray-500 text-sm'>Grey Chair</p>
        <p className='text-sm'>$19</p>
      </div>
      <div className='flex flex-row justify-between border-b-2  pb-3 border-dashed'>
        <p className='text-gray-500 text-sm'>Grey Chair</p>
        <p className='text-sm'>$19</p>
      </div>
      <div className='flex flex-row justify-between pt-3'>
        <p className='text-lg font-semibold'>Total</p>
        <p className=''>$38</p>
      </div>
      <button type='button' className='text-sm m-2 rounded-xl bg-blue-500 text-white px-3 py-2 mx-auto text-center'>
        Checkout
      </button>
    </div>
  )
}

export default Home
