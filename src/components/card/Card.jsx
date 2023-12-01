import './card.css'

export const Card = ({img, title, artist}) => {
  return (
    <div className='card'>
        <img 
            className='cover-image'
            src={img} 
            alt={title}
        />
        <div>
            <p className='artist'>{artist}</p>
            <p className='title'>{title}</p>
        </div>
    </div>
  )
}
