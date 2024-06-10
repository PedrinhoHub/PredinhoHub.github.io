


function deletarLinha(button) {
    var row = button.parentNode.parentNode;
    row.style.display = 'none';
  }
/* */


  document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(post => {
            const postDiv = document.getElementById('post');
            postDiv.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <p><strong>User ID:</strong> ${post.userId}</p>
                <p><strong>Post ID:</strong> ${post.id}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching the post:', error);
            const postDiv = document.getElementById('post');
            postDiv.innerHTML = '<p>Failed to fetch the post.</p>';
        });
});


/**/
function mostrarDiv1() {
  document.getElementById("div1").style.visibility = "visible";
  document.getElementById("div2").style.visibility = "hidden";
  document.getElementById("div3").style.visibility = "hidden";
}

function mostrarDiv2() {
  document.getElementById("div2").style.visibility = "visible";
  document.getElementById("div1").style.visibility = "hidden";
  document.getElementById("div3").style.visibility = "hidden";
}

function mostrarDiv3() {
  document.getElementById("div3").style.visibility = "visible";
  document.getElementById("div1").style.visibility = "hidden";
  document.getElementById("div2").style.visibility = "hidden";
}

