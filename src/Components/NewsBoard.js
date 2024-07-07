
import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"
const NewsBoard = ({ category}) => { 

    const [articles, setArticles] = useState([])
 
    useEffect(()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=191bf2e0c76f4b219ab3e2dde5e26e94`;
         fetch(url).then((response)=>response.json()).then((data)=> setArticles(data.articles))
    },[category])

    return(
        <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        {
            articles.map((news, index)=>( 
                 <NewsItem key ={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            ))
        }
        </div>

    )
} 

export default NewsBoard

