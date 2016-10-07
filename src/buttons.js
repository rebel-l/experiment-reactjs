var ButtonCounter = React.createClass({
    getInitialState: function() { // (1)
        return({count: 0});
    },

    add: function() {
        this.setState(
            {count: this.state.count + 1}); // (2)
    },

    style: function() { // (4)
        return {backgroundColor: this.props.colour};
    },

    render: function() {
        return(
            <div>
                <h1>{this.props.colour} counter</h1> // (3)
                <button style={this.style()}
                        onClick={this.add}>+</button>

                <p>Current count:
                    <span>{this.state.count}</span>
                </p>
                <hr />
            </div>
        );
    }
});

var App = React.createClass({
    getInitialState: function() {
        return {colours: ['red', 'green', 'blue']};
    },

    buttons: function() {
        return this.state.colours.map(function(colour, i) { // (2)
            return(<ButtonCounter key={i} colour={colour} />); // (1)
        });
    },

    render: function() {
        return(
            <div>{this.buttons()}</div>
        );
    },

    componentDidMount: function() { // (1)
        var that = this
        window.setInterval(function() { // (2)
            that.setState({colours: [ // (3)
                that.state.colours[1],
                that.state.colours[2],
                that.state.colours[0]]});
        }, 500);
    }
});

ReactDOM.render(<App />,
    document.querySelector('#react-container')); // (5)