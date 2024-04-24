import { useState } from 'react'
import { PropTypes } from 'prop-types'
import './Counter.css'
import CounterButton from './CounterButton'
export default function Counter({ by }) {

    //[0, ƒ]
    //const [firstElt, secondElt] = array
    const [count, setCount] = useState(0)

    function incrementCounterParentFunction(by) {
        setCount(count + by)
    }

    function decrementCounterParentFunction(by) {
        setCount(count - by)
    }
    function resetCounter() {
        setCount(0)
    }

    return (
        <div className="Counter">
            <span className="count">{count}</span>

            <CounterButton by={1}
                incrementMethod={incrementCounterParentFunction}
                decrementMethod={decrementCounterParentFunction} />
            <CounterButton by={2}
                incrementMethod={incrementCounterParentFunction}
                decrementMethod={decrementCounterParentFunction} />
            <CounterButton by={5}
                incrementMethod={incrementCounterParentFunction}
                decrementMethod={decrementCounterParentFunction} />

<button className="button resetButton" onClick={resetCounter}>Reset</button>

        </div>

    )
}

Counter.propTypes = {  //
    by: PropTypes.number
}

Counter.defaultProps = {
    by: 5
}