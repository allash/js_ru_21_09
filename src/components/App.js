import React, {Component} from 'react'
import Select from 'react-select'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import DateRangeComponent from './DateRangeComponent'

import 'react-select/dist/react-select.css'

class App extends Component {
    state = {
        selected: null,
        username: '',
    }

    render() {
        const {articles} = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        const {selected, username, from, to} = this.state

        return (
            <div>
                <h1>App name</h1>
                User: <input type = 'text' value = {username} onChange = {this.handleUserChange}/>
                <Select options={options} value={selected} onChange={this.handleChange} multi />

                <DateRangeComponent format='LL' />
              
                <ArticleList articles={articles}/>
                <ArticlesChart articles={articles}/>
            </div>
        )
    }

    handleResetClick = ev => {
        ev.preventDefault()
        this.setState({
            from: null,
            to: null
        })
    }

    handleDayPickerChange = selectedDay => {
        const range = DateUtils.addDayToRange(selectedDay, this.state );
        this.setState(range)
    }

    handleChange = selected => this.setState({ selected })

    handleUserChange = ev => {
        if (ev.target.value.length > 10) return this.setState({
            username: ''
        })

        this.setState({
            username: ev.target.value
        })
    }
}

export default App