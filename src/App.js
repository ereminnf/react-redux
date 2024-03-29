import React, { Component } from "react"
import { connect } from 'react-redux'
import "./App.scss"
import { add, sub, addNumber, asyncAdd } from './redux/actions/actions'

import Counter from './Counter'

class App extends Component {
    updateCounter(value) {
        // this.setState({
        //     counter: this.state.counter + value,
        // });
    }

    render() {
        return (
            <div className={"App"}>
                <h1>
                    Счетчик <strong>{this.props.counter}</strong>
                </h1>

                <hr />

                <div className="Actions">
                    <button onClick={this.props.onAdd}>Добавить 1</button>
                    <button onClick={this.props.onSub}>Вычесть 1</button>
                </div>

                <div className="Actions">
                    <button onClick={() => this.props.onAddNumber(15)}>Добавить 15</button>
                    <button onClick={this.props.onAddNumber.bind(this, -17)}>Вычесть 17</button>
                </div>

                <div className="Actions">
                    <button onClick={() => this.props.onAsyncAdd(100)}>Асинхроно добавить 100</button>
                </div>

                <Counter/>
            </div>
        );
    }
}

// получаем стейты из редакса
function mapStateToProps(state) {
    return {
        ...state.counter1,
        propsCounter: state.counter1.counter
    }
}

// Закидываем методы в наше приложение
function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(add()),
        onSub: () => dispatch(sub()),
        onAddNumber: (number) => dispatch(addNumber(number)),
        onAsyncAdd: number => dispatch(asyncAdd(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
