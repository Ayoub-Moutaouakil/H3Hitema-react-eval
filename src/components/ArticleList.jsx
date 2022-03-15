import {useState} from "react"
import { Article } from "./Article"

export const ArticleList = (props) => {
    
    const data = props.data

    return <article className="col-4">
        <h2>{data.titre}</h2>
        <p>{data.contenu}</p>
        <span className="badge bg-danger">{data.like}</span>
        <div className="row">
            {data.articles.map( (article, index) => {
                {/** props data={article}
                Commentaire({id : 1, text : "premier commentaire"})
                */}
                return <Article key={index} data={article} />
            } )}
        </div>
    </article>
}