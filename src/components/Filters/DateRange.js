import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {filterArticles, setFilter} from '../../AC'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {
   
    handleDayClick = (day) => {
        let dateRange = DateUtils.addDayToRange(day, this.props.filter.dateRange)
        let { selected } = this.props.filter
        const filter = {dateRange, selected}
        this.props.setFilter(filter)
        this.props.filterArticles(filter)
    }

    onResetClick = () => {
        let { selected } = this.props.filter
        let dateRange = {
            from: null,
            to: null
        }
        const filter = {dateRange, selected}

        this.props.setFilter(filter)
        this.props.filterArticles(filter)
    }

    render() {
        const { from, to } = this.props.filter.dateRange
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`

        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange} <button onClick={this.onResetClick}>Reset date</button>
            </div>
        )
    }
}

export default connect( (state) => ({
    filter: state.filter
}), { filterArticles, setFilter })(DateRange) 
