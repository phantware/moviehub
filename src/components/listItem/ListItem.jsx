import './listItem.scss'
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from '@material-ui/icons'
import { useState } from 'react'
import { useEffect } from 'react'
import axiosInstance from '../../util/axiosInstance'
import { Link } from 'react-router-dom'

const ListItem = ({ index, item }) => {
  const [isHover, setIsHover] = useState(false)
  const [movie, setMovie] = useState({})

  useEffect(() => {
    console.log('lalamovie', movie)
    const getMovie = async () => {
      try {
        const res = await axiosInstance.get('/movies/find/' + item)
        console.log('trailer', movie.trailer)
        setMovie(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMovie()
  }, [item])

  return (
    <Link to={{ pathname: '/watch', movie: movie }}>
      <div
        className='listItem'
        style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img src={movie.img} alt='' />
        {isHover && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className='itemInfo'>
              <div className='icons'>
                <PlayArrow className='icon' />
                <Add className='icon' />
                <ThumbUpAltOutlined className='icon' />
                <ThumbDownOutlined className='icon' />
              </div>
              <div className='itemInfoTop'>
                <span>{movie.duration}</span>
                <span className='limit'>+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className='desc'>{movie.desc}</div>
              <div className='genre'>{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  )
}

export default ListItem
