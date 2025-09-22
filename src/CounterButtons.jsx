function CounterButtons(props) {

      return (
    <div className="card">
        <button onClick={props.handleIncrement}>
          count is {props.count}

          
        </button>
        <p>this is an edit1</p>

            <button onClick={props.handleDecrement}>
          Decrement {props.count}

          
        </button>

    </div>

      )  
}
export default CounterButtons;