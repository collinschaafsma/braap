const Player = (props) => {

  const { video } = props

  return (
    <div className="bg-white hover:shadow-xl">
    <iframe
      width="100%"
      height="350"
      typeof="text/html" 
      src={`${video.link}?autoplay=0&modestbranding=1`}
      frameBorder="0">
    </iframe>
    </div>
  )
}

export default Player
