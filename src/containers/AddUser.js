import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AddUser extends React.Component {
    render() {
        console.log(this.props.formState.message);
        return (
            <div className="App">
                <p className="App-intro">
                    <li><Link to='/' >Home</Link></li>
                    <span style={{ fontColor: 'black' }}>{this.props.formState.message}</span>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        formState: state,
    }
};
export default connect(mapStateToProps)(AddUser);
