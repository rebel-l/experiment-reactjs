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
    render: function() {
        return(
            <div className=
                     {this.props.toggleState ? 'open' :
                         'closed'}>
                <h3 onClick=
                        {this.props
                            .toggleHandler
                            .bind(null, this.props.book.slug)}> // (6)
                    {this.props.book.title}
                </h3>
                <p>{this.props.book.body}</p>
            </div>
        );
    }
});

var App = React.createClass({

    getInitialState: function() { // (3)
        return {
            ulysses: true,
            seizeTheDay: false
        }
    },

    toggleAll: function() {
        console.log('click');
        this.setState({
            ulysses: !this.state.ulysses,
            seizeTheDay: !this.state.seizeTheDay
        });
    },

    toggleHandler: function(slug) {
        var newState = {};
        newState[slug] = !this.state[slug];
        this.setState(newState);
    },

    toggableBooks: function(data) { // (5)
        var that = this;
        return Object.keys(data).map(function(el) {
            var slug = data[el].slug;
            return(
                <CollapsibleBlock key={slug} book={that.props.books[slug]}
                                  toggleHandler={that.toggleHandler}
                                  toggleState={that.state[slug]} />
            )
        });
    },

    render: function() {
        return(
            <div>
                <h1>Toggable Content</h1>
                <button onClick={this.toggleAll}>Toggle all</button> {/* (4) */}
                <div>
                    {this.toggableBooks(this.props.books)}
                </div>
            </div>
        )
    }
});


ReactDOM.render(<App books={BOOKS} />, document.getElementById('react-container')); // (2)