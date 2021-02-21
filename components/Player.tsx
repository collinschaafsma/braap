export const Player = (props) => {

  const { video } = props

  return (
    <iframe 
      typeof="text/html" 
      width="640" 
      height="360"
      src={`${video.link}?autoplay=0&modestbranding=1`}
      frameBorder="0">
    </iframe>
  )
}
