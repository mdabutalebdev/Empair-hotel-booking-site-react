import React from 'react'
import Header2 from '../components/layouts/Header2'
import Container from '../components/Container'
import Heading from '../components/Heading'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
    <Header2/>
    <Container className={`text-center`}>
        <Heading text={`SORRY DID NO FOUND ANYTHING`} className={`mb-10`}/> <br />
        <Heading text={`404`} className={`mb-10`}/> <br />

        <Link to='/'><Heading text={`Go To Homepage`} className={`underline`}/> </Link>

    </Container>
    </>
  )
}

export default Error