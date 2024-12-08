import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps = {
        country: 'in',
        size: 5,
        category: "general",
    }
    
    static propTypes = {
        country: PropTypes.string,
        size: PropTypes.number,
        category: PropTypes.string
    }
    
    constructor(){
        super();
        console.log("hellow! i am a constructor")
        this.state = {
            results : [],
            loading : false,
            page : 1,
            nextPage: null ,
        }
    } 
    
    // async componentDidMount(){
    //     console.log("cmd");
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ddc6560c46a4fa79b9dca47363eb98a&pageSize=${this.props.pageSize}`;
    //     let url = `https://newsdata.io/api/1/latest?country=${this.props.country}&category=${this.props.category}&apikey=pub_57877edd86c97c897971382125708a4cbe5e7&size=${this.props.size}`;
    //     this.setState({loading: true});
    //     let data = await fetch(url);
    //     let parceddata = await data.json();
    //     console.log(parceddata);
    //     this.setState({ 
    //         results: parceddata.results, 
    //         totalResults: parceddata.totalResults,
    //         loading: false
    //     })
    // }
    
    async componentDidMount() {
        console.log("Component did mount");
        await this.fetchNews();
    }


    fetchNews = async () => {
        const { country, category, size } = this.props;
        
        let url = `https://newsdata.io/api/1/latest?country=${country}&category=${category}&apikey=pub_57877edd86c97c897971382125708a4cbe5e7&size=${size}`;
        
        this.setState({ loading: true });
        try {
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log("Fetched data:", parsedData);

            this.setState({
                results: Array.isArray(parsedData.results) ? parsedData.results : [],    
                totalResults: parsedData.totalResults,
                nextPage: parsedData.nextPage,
                loading: false,
            });
        } catch (error) {
            console.error("Error fetching data:", error);
            this.setState({ loading: false });
        }
    }
    

    HandlePreviousClick = async () => {
        console.log("Previous button clicked");
        // Optional: handle previous click based on specific page numbers if needed.
    }


    
    HandleNextClick = async () => {
        const { nextPage } = this.state;
        if (nextPage) {
            this.setState({ page: nextPage }, async () => {
                const { country, category, size } = this.props;
                const { page } = this.state;
                
                let url = `https://newsdata.io/api/1/latest?country=${country}&category=${category}&apikey=pub_57877edd86c97c897971382125708a4cbe5e7&size=${size}&page=${page}`;
                
                this.setState({ loading: true });
                try {
                    let data = await fetch(url);
                    let parsedData = await data.json();
                    console.log("Fetched data:", parsedData);
        
                    this.setState({
                        results: Array.isArray(parsedData.results) ? parsedData.results : [],  
                        nextPage: parsedData.nextPage,  
                        totalResults: parsedData.totalResults,
                        loading: false,
                    });
                } catch (error) {
                    console.error("Error fetching data:", error);
                    this.setState({ loading: false });
                }
            });
        } else {
            console.log("No valid nextPage token found");
        }
    }



    //business entertainment general health science sports technology
    render() { 
        return ( 
            console.log("render"),
            <div className='container my-3'>
                <h1 className="text-center">Newsmonkey- top headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className='row'> 
                    {this.state.results.map((element)=>{
                        // console.log(element);
                        return <div className='col-md-4' key={element.article_id}>
                            <NewsItem title={element.title? element.title:""} description={element.description?element.description: ""} imageUrl={!element.image_url?" https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iqAuVt7PAtFU/v1/1200x817.jpg": element.image_url} newsUrl = {element.source_url}/>
                        </div>
                    })}
                </div> 
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.HandlePreviousClick}>&larr; Previous</button>
                    <button disabled={!this.state.nextPage} type="button" className="btn btn-primary" onClick={this.HandleNextClick}>Next &rarr;</button>
                </div>    
            </div>
        )
    }
}


    //previous logic --> can be modified and used (but the current logic is better)


    // async componentDidMount(){
    //     console.log("cmd");
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ddc6560c46a4fa79b9dca47363eb98a&pageSize=${this.props.pageSize}`;
    //     let url = `https://newsdata.io/api/1/latest?country=${this.props.country}&category=${this.props.category}&apikey=pub_57877edd86c97c897971382125708a4cbe5e7&size=${this.props.size}`;
    //     this.setState({loading: true});
    //     let data = await fetch(url);
    //     let parceddata = await data.json();
    //     console.log(parceddata);
    //     this.setState({ 
    //         results: parceddata.results, 
    //         totalResults: parceddata.totalResults,
    //         loading: false
    //     })
    // }


   // HandlePreviousClick = async() => {
    //     console.log("previous button clicked");
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cstegory}&apiKey=1ddc6560c46a4fa79b9dca47363eb98a&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    //     let url = `https://newsdata.io/api/1/latest?country=${this.props.country}&category=${this.props.category}&apikey=pub_57877edd86c97c897971382125708a4cbe5e7&page=${this.state.page-1}&size=${this.props.size}`;

    //     this.setState({loading: true});
    //     let data = await fetch(url);
    //     let parceddata = await data.json();
    //     console.log(parceddata);
    //     this.setState({
    //         page: this.state.page - 1,
    //         results: parceddata.results,
    //         loading: false  
    //     })
    // }


    // HandleNextClick = async() => {
    //     console.log("next button clicked");
    //     if(!(Math.ceil(this.state.totalResults/this.props.size) < this.state.page+1)){
    //         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cstegory}&apiKey=1ddc6560c46a4fa79b9dca47363eb98a&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //         let url = `https://newsdata.io/api/1/latest?country=${this.props.country}&category=${this.props.category}&apikey=pub_57877edd86c97c897971382125708a4cbe5e7&page=${this.state.page+1}&size=${this.props.size}`;
    //         this.setState({loading: true});
    //         let data = await fetch(url);
    //         let parceddata = await data.json();
    //         console.log(parceddata);
    //         this.setState({
    //             page: parceddata.nextPage,
    //             results: parceddata.results,
    //             loading: false
    //         })
    //     }
    // }
    