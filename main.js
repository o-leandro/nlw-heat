
const LinksSocialMedia = {
    github: "o-leandro",
    youtube: "maykbrito",
    facebook: "maykbrito",
    instagram: "maykbrito",
    twitter: "maykbrito"
}

function changeSocialMediaLinks() {
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class');
        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
        alert(li.children[0].href)
    }
}

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
    
    fetch(url)
    .then(response => response.json())   
    .then(data => {
       userName.textContent = data.name 
       userBio.textContent = data.bio
       userLink.href = data.html_url
       userImage.src = data.avatar_url
       userLogin.textContent = data.login
    })
}

getGitHubProfileInfos();












// changeSocialMediaLinks();
// boas práticas de escrita de variáveis
// camelCase
// PascalCase
// snake_case

// document.getElementById('userName').textContent = "Fernando Costa"
//     userName.textContent = "Kaio Brito"

//     for(let i = 0; i <= 10; i++) {
//         alert(i);
//     }