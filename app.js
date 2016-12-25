class Channel extends React.Component {
    onClick() {
        console.log('Click ', this.props.name);
    }

    render() {
        return (
            <li onClick={this.onCLick.bind(this)}>
                {this.props.name}</li>
        )
    }
}


class Channel extends React.Component {
    onClick() {
        console.log('Click ', this.props.name);
    }

    render() {
        return (
            <ul>
                <Channel name='Hardware Support'/>
            </ul>
        )
    }
}

ReactDOM.render(<ChannelList />,
    document.getElementById('app'));