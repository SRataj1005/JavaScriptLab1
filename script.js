(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    answer.innerHTML="Loading...";
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
      answer.innerHTML = "";
      array.forEach(post => answer.innerHTML += `
        <div>
        <ul>
          <li>User ID: ${post.userId}</br> ID:{post.id}</br> title ${post.title}</br> body:${post.body}</br>
        </ul>
        <hr/>
        </div>
        `);
          })
  })

  cw2.addEventListener("click", function () {
    //TODO implement it
  })

  cw3.addEventListener("click", function () {
    answer.innerHTML + "Loading..."
    fetch('https://jsonplaceholder.typicode.com/posts/33')
    .then(response => response.json())
    .then(post => answer.innerHTML = displayPost(post))
  })

})();

function displayPost(post)
  {
    return`
    <div>
<ul>
<h2>User ID: ${post.userId}</h2>
<li>Title: ${post.title}</li>
</ul>
<hr/>
</div>
`
  }
