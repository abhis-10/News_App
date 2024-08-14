import React , {Component} from "react";  // {Component} is a class component that is imported from react module
import NewsItem from "./NewsItem";

class News extends Component{ // this is an class based Component..
    constructor(){
        super()
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }
   async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=09c2950aa4f84a71b36b3d4c029d3bcb&page=1"
        let data =await fetch(url)
        let parsedata = await data.json()
        console.log(parsedata)
    this.setState({articles:parsedata.articles})
    }
    handleNxt=async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=09c2950aa4f84a71b36b3d4c029d3bcb&page=${this.state.page+1}`
        let data =await fetch(url)
        let parsedata = await data.json()
        console.log(parsedata)
        this.setState({
            page:this.state.page+1,
            articles:parsedata.articles
    })
    }
    handlePre=async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=09c2950aa4f84a71b36b3d4c029d3bcb&page=${this.state.page-1}`
        let data =await fetch(url)
        let parsedata = await data.json()
        console.log(parsedata)
        this.setState({
            page:this.state.page-1,
            articles:parsedata.articles
    })
    }
render(){
    return(
        <div className="container my-3">
            <h1>TaZa Khabar-Top Headlines</h1>
           

            <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-3" key={element.url} > 
                    <NewsItem title={element.title.slice(0,38)} description={element.description?element.description.slice(0,80):"...."} imageurl={element.urlToImage?element.urlToImage:"https://static.toiimg.com/thumb/msid-73560769,width-400,resizemode-4/73560769.jpg"} url={element.url}/>
                </div>
            })}
         </div>
         <div className="container d-flex justify-content-between">
         <button type="button" className="btn btn-info" onClick={this.handlePre}>Previous</button>
         <button type="button" className="btn btn-info" onClick={this.handleNxt}>Next</button>

         </div>
        </div>
    )
 }
}

export default News