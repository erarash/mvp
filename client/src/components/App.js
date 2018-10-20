import React from 'react';
import axios from 'axios';
import MemeList from './memeList';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            memes: [],
            term: ''
        }
        // this.saveMeme = this.saveMeme.bind(this);
        this.fetchMemes = this.fetchMemes.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    // componentDidMount() {
    //     this.fetchMemes()
    // }
    
    fetchMemes(e) {
        e.preventDefault();
        axios
        .get("/api/memes", {
            params: { term: this.state.term }
        }).then(({data}) => {
            this.setState({ memes: data })
        })
        .catch(err => console.error(err))
    }
    
    handleInput(e){
        this.setState({
            term: e.target.value
        })
    }

    
    // saveMeme(){

    // }

    render(){
        return(
            <div>
                <h1>memes</h1>
                <form>
                    <input onChange={this.handleInput} />
                    {/* <input type="submit" /> */}
                    <button onClick={this.fetchMemes}>Search yo meme</button>
                </form>
                <MemeList memes={this.state.memes} /*saveMeme={this.saveMeme}*//>
            </div>
        )
    }
}
