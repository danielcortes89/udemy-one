import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import Users from './Users'

const Search =  ({  setAlert }) => {
    const githubContext = useContext(GithubContext)

    const [text, setText] = useState('');
    // nameOfState, nameToSetState, default value

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(text === ''){
            setAlert('Please Enter Something', 'light')
        } else {
            githubContext.searchUsers(text)
            setText('')
        }
        
    }


        return (
            <div>
                <form className="form" onSubmit={onSubmit}>
                    <input 
                        type="text" 
                        name="text"
                        value={text} 
                        placeholder="seach users"
                        onChange={onChange}/>
                    <input type="submit" value ="search" className="btn btn-dark btn-block"/>
                </form>

                {githubContext.users.length > 0 && 
                    <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>
                        Clear
                    </button>
                }       
            </div>
        )
}


export default Search