import React from 'react';
import axios from 'axios';
import MemeList from './memeList';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            memes: [],
            term: '',
            savedMemes: []
        }
        this.fetchMemes = this.fetchMemes.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.saveMeme = this.saveMeme.bind(this);
    }


    // componentDidMount(){
    //     this.saveMeme()
    // }



    fetchMemes(e) {
        e.preventDefault();
        axios
            .get("/api/memes", {
                params: { term: this.state.term }
            }).then(({ data }) => {
                this.setState({ memes: data })
            })
            .catch(err => console.error(err))
    }

    handleInput(e) {
        this.setState({
            term: e.target.value
        })
    }


    saveMeme(meme) {
        let context = this
        axios
            .post('/api/memes', { meme: meme })
            .then(data => {
                this.setState({
                    savedMemes: meme
                })
                console.log(this.state.savedMemes, 'this is saved memes')
            })
            .catch(err => {
                console.error(err)
            })
    }





    render() {


        let styles = {
            position: 'absolute',
            top: '3%',
            left: '75%',
            fontSize: '125%',
            background: 'rgb(202, 60, 60)',
            borderRadius: '4px'
        };


        return (
            <div>

                <h1>┬┴┬┴┤ ͡° ͜ʖ ͡°)├┬┴┬┴</h1>
                <div>
                    <button style={ styles }>
                        <a href='https://thumbs.dreamstime.com/z/woman-hand-ok-sign-2110301.jpg'>DANGER!! DONT PUSH</a>
                    </button>
                </div>
                <form>
                    <input onChange={this.handleInput} />

                    <button onClick={this.fetchMemes}>gif in a jiff</button>
                </form>
                <MemeList memes={this.state.memes} saveMeme={this.saveMeme} savedMemes={this.state.savedMemes} />
            </div>
        )
    }
}
