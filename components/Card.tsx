import Player from './Player'
import {Video} from '../lib/video'

const Card = (props: {video: Video}) => {
  return (

    <Player video={props.video} />
    
  )
}
export default Card