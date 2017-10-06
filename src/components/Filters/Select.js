import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterArticles, setFilter} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => {
        let { dateRange } = this.props.filter
        let filter = {selected, dateRange}
        this.props.setFilter(filter)
        this.props.filterArticles(filter)
    }

    render() {
        const { articles, filter } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        
        return <Select
            options={options}
            value={filter.selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect( (state) => ({
    articles: state.defaultArticles,
    filter: state.filter
}), { filterArticles, setFilter })(SelectFilter)