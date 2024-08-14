import React , {Component} from 'react'

class NewsItem extends Component{

    render(){
       let {title,description,imageurl,url} = this.props; // here i have used destructuring , i could also have used another way that is line 7 and 8
    // let title = this.props.title
    // let description = this.props.description
        return(
           <div className='my-3'>
            <div className="card" style={{width: "18rem"}}>
            <img src={imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} target="_blank" className="btn btn-sm btn-primary">Read News</a>
            </div>
            </div>
           </div> 
        )
    }
}

export default NewsItem
