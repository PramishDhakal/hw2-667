import React, {Component} from 'react'
import './wakkihaya_style.css';
import {Link} from "react-router-dom";

const axios = require('axios');

const request = axios.create({
    baseURL: 'http://newsapi.org/v2'
});

class wakkihaya extends Component{

    constructor(props){
        super(props);
        this.state ={
            input:"",
            output:"",
            isGetInput: false
        };
        this.newsHandlerFunction = this.newsHandlerFunction.bind(this);
        this.handleChange = this.handleChange.bind(this)

    }

    newsHandlerFunction (e){
        e.preventDefault();
        var keyword = this.state.input;
        console.log("keyword" +keyword);
        request.get('/everything?q='+ keyword + '&apiKey=a6eee346d50444b98757bafdc59e8921')
            .then(function(items){
                const firstArticle = items.data.articles[0];
                const url = firstArticle['url'];
                return url
            }).then(url => {
            // console.log(url);
            this.setState(()=>({
                isGetInput: true,
                output: url
            }))
            //return url;
        }).catch((error)=>{
            console.log(error);
        })
    };

    handleChange (e) {
        this.setState({input: e.target.value})
    }

    reload(e){
        window.location.reload();
    }

    render() {
        return(
            <div className="container">
                <div className="header_news">
                    News Api
                </div>
                <p className="subsection">Get the latest news by whatever keyword you want</p>
                <form
                onSubmit={e =>this.newsHandlerFunction(e)}>

                    <label className="input_label">
                        <input
                            type="text"
                            name="keyword"
                            value={this.state.input}
                            onChange={this.handleChange}
                        />
                        <button
                            type="submit">
                            submit
                        </button>
                    </label>
                </form>
                <div className="output">
                    {this.state.isGetInput && <p className="title_output">News is here! </p>}
                    {this.state.isGetInput && <p><a href={this.state.output}> {this.state.output}</a></p> }
                </div>
                <footer>
                    <ul>
                        <li onClick={this.reload}>Re:search</li>
                        <li><Link to = "">Back to Home</Link></li>
                    </ul>
                </footer>
            </div>

        )
    }
}

export default wakkihaya
