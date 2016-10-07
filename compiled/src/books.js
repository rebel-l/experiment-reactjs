'use strict';

var BOOKS = { // (1)
    ulysses: {
        slug: 'ulysses',
        title: 'Ulysses',
        body: 'YES BECAUSE HE NEVER DID...'
    },
    seizeTheDay: {
        slug: 'seizeTheDay',
        title: 'Seize the Day',
        body: 'Seize the Day, first published in 1956...'
    }
};

var CollapsibleBlock = React.createClass({ // (6)
    render: function render() {
        return React.createElement(
            'div',
            { className: this.props.toggleState ? 'open' : 'closed' },
            React.createElement(
                'h3',
                { onClick: this.props.toggleHandler.bind(null, this.props.book.slug) },
                ' // (6)',
                this.props.book.title
            ),
            React.createElement(
                'p',
                null,
                this.props.book.body
            )
        );
    }
});

var App = React.createClass({

    getInitialState: function getInitialState() {
        // (3)
        return {
            ulysses: true,
            seizeTheDay: false
        };
    },

    toggleAll: function toggleAll() {
        console.log('click');
        this.setState({
            ulysses: !this.state.ulysses,
            seizeTheDay: !this.state.seizeTheDay
        });
    },

    toggleHandler: function toggleHandler(slug) {
        var newState = {};
        newState[slug] = !this.state[slug];
        this.setState(newState);
    },

    toggableBooks: function toggableBooks(data) {
        // (5)
        var that = this;
        return Object.keys(data).map(function (el) {
            var slug = data[el].slug;
            return React.createElement(CollapsibleBlock, { key: slug, book: that.props.books[slug],
                toggleHandler: that.toggleHandler,
                toggleState: that.state[slug] });
        });
    },

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Toggable Content'
            ),
            React.createElement(
                'button',
                { onClick: this.toggleAll },
                'Toggle all'
            ),
            ' ',
            React.createElement(
                'div',
                null,
                this.toggableBooks(this.props.books)
            )
        );
    }
});

ReactDOM.render(React.createElement(App, { books: BOOKS }), document.getElementById('react-container')); // (2)
//# sourceMappingURL=books.js.map