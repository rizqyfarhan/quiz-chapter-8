import { useState, useEffect } from 'react';
import './Form.css';

const Form = (props) => {

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [level, setLevel] = useState('');

    useEffect(() => {
        if (props.form) {
            setUserName(props.form.username);
            setEmail(props.form.email);
            setExperience(props.form.experience);
            setLevel(props.form.level);
        }
    }, [props.form]);

    const usernameOnChangeHandle = (event) => {
        setUserName(event.target.value);
    }

    const emailOnChangeHandle = (event) => {
        setEmail(event.target.value);
    }

    const experienceOnChangeHandle = (event) => {
        setExperience(event.target.value);
    }

    const levelOnChangeHandle = (event) => {
        setLevel(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (props.form) {
            const data = {
                id: props.form.id,
                username: username,
                email: email,
                experience: experience,
                level: level
            }

            props.onUpdatePlayer(data);
        } else {
            const data = {
                username: username,
                email: email,
                experience: experience,
                level: level
            }

            props.onAddPlayer(data);
        }

        setUserName('');
        setEmail('');
        setExperience('');
        setLevel('');
    }

    const title = props.form
        ? "EDIT PLAYER"
        : "ADD PLAYER";

    return (
        <form className='form__controls' onSubmit={onSubmit}>
            <div className='form__control'>
                <label>Username</label>
                <input type='text' value={username} onChange={usernameOnChangeHandle}></input>
            </div>
            <div className='form__control'>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={emailOnChangeHandle}></input>
            </div>
            <div className='form__control'>
                <label>Experience</label>
                <input type='text' value={experience} onChange={experienceOnChangeHandle}></input>
            </div>
            <div className='form__control'>
                <label>Level</label>
                <input type='text' value={level} onChange={levelOnChangeHandle}></input>
            </div>

            <button type='submit' >
                Submit
            </button>
        </form>
    )
};

export default Form;