function Person(props) {
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>Your age: {props.age}</p>
        </div>
    );
}

var app = (
    <div>
        <Person name="ben" age="24" />
        <Person name="jerry" age="33" />
    </div>
);

ReactDOM.render(app, document.querySelector('#app'));
// ReactDOM.render(<Person name="ben" age="24" />, document.querySelector('#p1'));
// ReactDOM.render(<Person name="jerry" age="33" />, document.querySelector('#p2'));