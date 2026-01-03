
import React from 'react'
import Security from './5security'
import Trustedby from './7trustedby'
import TestimonialsSection from './6testimonials'

export const Container = () => {
    return (
        <div className='bg-zinc-800 px-5 md:mx-10 md:rounded-4xl  '>
            <Security />
            <TestimonialsSection />
            <Trustedby />
        </div>
    )
}
