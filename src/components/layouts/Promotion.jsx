import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Button from '../Button'

function Promotion() {
  return (
    <section className='py-[70px]'>
        <Container className='pt-[90px] pb-[60px] bg-promotionBanner bg-cover bg-no-repeat bg-center text-center rounded-3xl cursor-pointer'>
            <Heading className='text-white font-medium text-[56px] w-[1076px] m-auto' text='Tour the World from Your Couch with #ExperienceLive!'/>
            <Paragraph text='To kickstart your digital adventures with Entrada' className='text-white text-[32px] my-[70px]'/>
            <Button text='Check All' className='text-third py-3 px-6'/>

        </Container>

    </section>
  )
}

export default Promotion