// Write code here to communicate with Github

function getRepos(user) {
  fetch(`https://api.github.com/users/${user}/repos`)
    .then(res => res.json())
    .then(function(response) {
      const reposCount = document.querySelector("#repos-count");
      reposCount.innerText = response.length;
      const repoList = document.querySelector("#repos-list");
      console.log(response);

      return response.map(function(rep) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.innerText = rep.name;
        a.setAttribute("href", `${rep.html_url}`);
        li.appendChild(a);
        return repoList.appendChild(li);
      });
    });
}

getRepos("garbanv");
