import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import axiosInstance from '../../util/axiosInstance'
import './home.scss'

const Home = ({ type }) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosInstance.get(
          `/lists?${type ? 'type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`
        )
      } catch (err) {
        console.log(err.message)
      }
    }
    getRandomLists()
  }, [type, genre])
  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home
