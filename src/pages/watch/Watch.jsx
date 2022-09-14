import { ArrowBackOutlined } from '@material-ui/icons'
import { useLocation } from 'react-router-dom'
import './watch.scss'

const Watch = () => {
  const location = useLocation()

  console.log('location', location)
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackOutlined />
        Home
      </div>
      <iframe
        className='video'
        autoPlay
        progress
        controls
        src='https://www.youtube.com/embed/ZTI6T5M8Fj0'
        title='movieprev'
      />
    </div>
  )
}

export default Watch
