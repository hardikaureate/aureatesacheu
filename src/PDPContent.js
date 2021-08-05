import React from 'react';
import './App.css';
import { client } from './client';
import PDPPostContent from './components/PDP/PDPPostContent';


class PDPContent extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        client.getEntries({ content_type: 'productPage' })
            .then((response) => {
                //console.log({response})
                this.setState({
                    articles: response.items
                })
            })
            .catch(console.error)
    }

    render() {
        return (
            <div className="App">
                <div className='container'>
                    <header>
                        <div className='wrapper'>
                            <span className='logo'>Product Page Content</span>
                        </div>
                    </header>
                    <main>
                        <div className='wrapper'>
                            <PDPPostContent postss={this.state.articles} />
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default PDPContent;