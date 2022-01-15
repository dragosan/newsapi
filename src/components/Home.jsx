import React, { useState } from "react"
import Showcase from "./layout/Showcase"
import Spinner from "./layout/Spinner"

// api key 38067550-66e3-11ec-98c1-17a17e81d7f5
const Home = ({ data, isLoading }) => {
  return (
    <>
      <Showcase />
      <section id="home-articles" className="py-2">
        <div className="container">
          <h2>Editor Picks</h2>

          <div className="articles-container">
            {data ? (
              data.articles.slice(0,8).map((article) => (
                <article key={article.name} className="card">
                  <div className="category category-sports">Sports</div>
                  {/* <video width="320" height="240" controls autoplay>
  <source src={article.videos[0]}  />
  <source src={article.videos[0]} type="video/ogg" />
Your browser does not support the video tag.
</video> */}

{/* <iframe width="560" height="315" src={article.videos[0]} frameborder="0" allowfullscreen></iframe> */}
      
                  {/* <h3> */}
                    {/* <Link to={`/article/${article.title}`}>
                      {article.title}
                    </Link> */}
                    {/* <a href={article.url} target="_blank">
                      {article.title}
                    </a>
                  </h3>
                  <p>{article.description}</p> */}
                  <img src={article.urlToImage} alt={article.title} />
                  
                </article>
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
