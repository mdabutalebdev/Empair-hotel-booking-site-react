import React from 'react'
import Container from '../components/Container'
import { Checkbox } from '@material-tailwind/react'
import GallerySlider from '../components/GallerySlider'


function Demo() {
  return (
    <>
     <Container>
     <h1 className='text-5xl'>hello every one </h1>
     <Checkbox color='red'/>

     <GallerySlider/>
     </Container>
    </>
  )
}

export default Demo