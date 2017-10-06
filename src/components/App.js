import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import Filters from './Filters'
import Counter from './Counter'
import {connect} from 'react-redux'

class App extends Component {
    state = {
        username: ''
    }

    render() {
        const {username} = this.state

        return (
            <div>
                <h1>App name</h1>
                <Counter />
                <Filters articles = {[]} />
                <ArticleList />
            </div>
        )
    }
}

export default App