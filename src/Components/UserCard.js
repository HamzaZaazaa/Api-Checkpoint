import React from 'react'
import {Card} from 'react-bootstrap'

const UserCard = ({user}) => {
    console.log(user)
  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
    <Card.Text>
     {user.phone} <br />
     {user.email} <br/>
     {user.website}
    </Card.Text>
  </Card.Body>
</Card>
    </div>
  )
}

export default UserCard