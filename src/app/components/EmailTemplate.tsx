import React from 'react'

const EmailTemplate = ({
    name,
    phonenumber,
    email,
    emailsub,
    message,
  }:any) => {
  return (
    <div>
        you got a message from {name},
        <p>number{phonenumber}</p>
        <p>email{email} </p>
        <p>subject{emailsub}</p>
        <p>message{message}</p>

    </div>
  )
}

export default EmailTemplate