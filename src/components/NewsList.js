import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

const URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d975f6ba28fb4f4d820929b26236a329'
const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(URL)
            setArticles(response.data.articles)
        }
        getArticles()
    }, [])
    
  return (
    <div>
        {articles.map(article => {
            return (
                <NewsItem
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
                />
            )
        })}
    </div>
  )
}

export default NewsList