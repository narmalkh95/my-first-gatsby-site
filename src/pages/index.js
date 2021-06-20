import * as React from 'react'
import '../styles/index.scss';
import NavBar from '../components/ReusableComponents/NavBar/NavBar'
import HomePage from "../components/HomePage/HomePage";

const IndexPage = () => {
  return (
    <main>
      <NavBar/>
      <HomePage/>
    </main>
  )
}

export default IndexPage
