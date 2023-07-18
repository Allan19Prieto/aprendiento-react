import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return(
        <section className='App'>
            <TwitterFollowCard userName="Lobo" initialIsfollowing={true}>
                Allan Prieto Badilla
            </TwitterFollowCard>

            <TwitterFollowCard userName="Aguacate">
                Jime Picado Solano
            </TwitterFollowCard>
        </section>
    )
}