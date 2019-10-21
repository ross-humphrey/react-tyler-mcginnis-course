// Rendering lists in React

// Keeps the API surface to a minimum, no new
// API - as using JS

// unique key prop has to be added to each item
<ul id = "tweets">
  {tweets.map((tweet) => (
    <li key={tweet.id}>
      {tweet.text}
    </li>
  ))}
</ul>
