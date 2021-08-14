import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'Mojumbo',
                avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo'
            }, {
                id: '2',
                login: 'Mojumbo',
                avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo'
            }, {
                id: '3',
                login: 'Mojumbo',
                avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo'
            }
            
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => {
                    return <UserItem key={user.id} user={user}/>
                })}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1em'
}

export default Users
