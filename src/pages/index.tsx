import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import initScene from './components/Page.js';
import React, { useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    initScene();
  }, []);

  return (
    <>
    <main>
      <div>
      </div>
    </main>
     
    </>
  )
}
