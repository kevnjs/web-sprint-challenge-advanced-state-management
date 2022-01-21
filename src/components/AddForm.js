import React, { useState } from 'react';
import { connect } from 'react-redux';
import { onError, addSmurf } from '../actions';


const AddForm = ({errorMessage, dispatch}) => {
    const [error, showError] = useState(false)
    const [state, setState] = useState({
        name:"",
        position:"",
        nickname:"",
        description:""
    });

    //remove when error state is added

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value,
            id: 1000
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (state.name === "" || state.position === "" || state.nickname === "") {
            showError(true)
            return dispatch(onError())
        } else {
            return dispatch(addSmurf(state))
        }
    }

    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={state.name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input onChange={handleChange} value={state.position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input onChange={handleChange} value={state.nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea onChange={handleChange} value={state.description} name="description" id="description" />
            </div>
            <div>
                { 
                    // COULD NOT FIGURE OUT WHY ERROR MESSAGE WONT RETURN TRUTHY
                    error && <div data-testid="errorAlert" className="alert alert-danger" role="alert"> Error: Please fill out all fields </div> 
                }
            </div>
            <button>Submit Smurf</button>
        </form>
    </section>);
}

const mapStateToProps = (state) => {
    return {
        errorMessage: ""
    }
}

export default connect(mapStateToProps)(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value. 
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.