import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description,imageUrl,newsUrl,time,author}= this.props;
    let date=new Date(time);
    date=date.toGMTString();
    return (
      <div className='my-3'>
        <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text"><small className="text-danger">by {author} on {date}</small></p>
            <p className="card-text"> {description}...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem