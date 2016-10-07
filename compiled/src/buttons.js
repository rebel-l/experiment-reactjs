'use strict';

var ButtonCounter = React.createClass({
    getInitialState: function getInitialState() {
        // (1)
        return { count: 0 };
    },

    add: function add() {
        this.setState({ count: this.state.count + 1 }); // (2)
    },

    style: function style() {
        // (4)
        return { backgroundColor: this.props.colour };
    },

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                this.props.colour,
                ' counter'
            ),
            ' // (3)',
            React.createElement(
                'button',
                { style: this.style(),
                    onClick: this.add },
                '+'
            ),
            React.createElement(
                'p',
                null,
                'Current count:',
                React.createElement(
                    'span',
                    null,
                    this.state.count
                )
            ),
            React.createElement('hr', null)
        );
    }
});

var App = React.createClass({
    getInitialState: function getInitialState() {
        return { colours: ['red', 'green', 'blue'] };
    },

    buttons: function buttons() {
        return this.state.colours.map(function (colour, i) {
            // (2)
            return React.createElement(ButtonCounter, { key: i, colour: colour }); // (1)
        });
    },

    render: function render() {
        return React.createElement(
            'div',
            null,
            this.buttons()
        );
    },

    componentDidMount: function componentDidMount() {
        // (1)
        var that = this;
        window.setInterval(function () {
            // (2)
            that.setState({ colours: [// (3)
                that.state.colours[1], that.state.colours[2], that.state.colours[0]] });
        }, 500);
    }
});

ReactDOM.render(React.createElement(App, null), document.querySelector('#react-container')); // (5)
//# sourceMappingURL=buttons.js.map