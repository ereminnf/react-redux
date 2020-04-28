import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add2 } from './redux/actions/actions'

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {}

    render() {

        return (
            <div style={{padding: 20, border: '1px solid #ccc'}}>
                <h1>Counter {this.props.counter2}</h1>
                <hr/>
                <div>
                    <button onClick={this.props.onChange.bind(this, 1)}>add</button>
                    <button onClick={this.props.onChange.bind(this, -1)}>sub</button>
                </div>
            </div>
        )
    }
}

// получаем стейты из редакса
function mapStateToProps(state) {
    return {
        ...state.counter2,
        //counter: state.counter2.counter2
    }
}

// Закидываем методы в наше приложение
function mapDispatchToProps(dispatch) {
    return {
        onChange: (number) => dispatch(add2(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)