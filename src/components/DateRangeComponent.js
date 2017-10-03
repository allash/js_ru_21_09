import React, {Component} from 'react'
import DayPicker, {DateUtils} from 'react-day-picker'
import moment from 'moment'

import 'react-day-picker/lib/style.css';

class DateRangeComponent extends Component {
    state = {
        from: null,
        to: null
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

    render() {
        const {from, to} = this.state
        const {format} = this.props
        return (
            <div>
                {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
                {from && !to && <p>Please select the <strong>last day</strong>.</p>}
                {from &&
                to &&
                <p>
                    Range from
                    {' '}
                    {moment(from).format(format)}
                    {' '}
                    to
                    {' '}
                    {moment(to).format(format)}
                    .
                    {' '}<a href="." onClick={this.handleResetClick}>Reset</a>
                </p>}
                <DayPicker 
                    onDayClick={this.handleDayPickerChange} 
                    numberOfMonths={2}
                    selectedDays={[from, { from, to }]}
                    fixedWeeks
                />
            </div>
        )
    }
}

DateRangeComponent.defaultProps = {
    format: 'L'
}

export default DateRangeComponent