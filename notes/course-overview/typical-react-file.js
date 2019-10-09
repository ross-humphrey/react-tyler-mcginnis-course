import React from 'react'

export default function User ({name, username}) {
  const avatarURL = `https://github.com/${username}.png?size=200`

  return (
    <div>
      <h1>{name}</h1>
      <img
        alt={`Avatar for ${username}`}
        src={avatarURL}
      />
    </div>
  )
}
