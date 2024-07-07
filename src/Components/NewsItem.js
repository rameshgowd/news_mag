
import image from '../assets/news.jpg'

const NewsItem = (props) => {
    let {title, description, src, url} =props
    return(
        <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-2 px-2 py-2" style={{maxWidth:"345px"}}>
        <img src={src ? src:image} style={{height:"200px", width:"325px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description ? description.slice(0,90):"News is a report of a cureent event. It is a information about something that has just happend " }</p>
        <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>

    )
} 

export default NewsItem