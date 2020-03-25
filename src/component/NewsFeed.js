//5983ed84d45c4272ae3917a7c0a4314d
import React, { Component } from 'react'

function NewsItem(props) {
    return (
        <div className="flex flex-col items-center justify-between border-2 border-gray-200 rounded-md shadow-lg my-4 w-full max-w-md p-3">
                <div className="w-1/3">
                <div
                    style=
                        {
                            {
                                backgroundImage: `url(${props.pictureUrl})`,
                                backgroundPosition: "center center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"
                            }
                        }
                    className="rounded-full h-32 w-32">

                    </div>
                    </div>
            <div className="flex flex-col ml-3 ">
                <div className="font-bold my-2 text-xl lg:text-center">
                        {props.title}
                </div>
                <div className="text-xs">
                <span className="font-semibold">Date :</span> {props.publicationDate}
                </div>

                <div className="text-md">
                       {props.description}
                </div>
                <div className="flex flex-col">
                    <div className="text-xs">
                        <span className="font-semibold">Author:</span> {props.author} 
                    </div>
                    <div className="text-xs">
                    <span className="font-semibold">Source:</span> {props.source} 
                    </div>
                
                </div>
                <a 
                    href={props.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-32 text-center self-end lg:self-center">
                        Read More
                </a>
                
            </div>

        </div>
    );
}


export default class NewsFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tiles: []
        }
    }

   async componentDidMount() {
        const apiEndpoint = "http://newsapi.org/v2/top-headlines?country=us&apiKey=5983ed84d45c4272ae3917a7c0a4314d";
        const response = await fetch(apiEndpoint);
        const news = await response.json();
        //console.log(news);
        const tiles = news.articles.map((article) => {
            return (
            <NewsItem
            key={article.url}
            pictureUrl={article.urlToImage}
            title={article.title}
            publicationDate={article.publishedAt}
            description={article.description}
            author={article.author}
            source={article.source.name}
            url={article.url}

            />);
        });

        this.setState({tiles: tiles})
    }

    render() {
        return (
            <div>
                {this.state.tiles}
            </div>
        )
    }
}
