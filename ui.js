class UI{
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfileUser(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" class="img-fluid mb-2">
                        <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <br><br><br>
                        <ul class="list-group">
                             <li class="list-group-item">Company: ${user.company}</li>
                             <li class="list-group-item">Blog: ${user.blog}</li>
                             <li class="list-group-item">Location: ${user.location}</li>
                             <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        `;
    }

    showRepos(repos){
        let output = '';
        repos.forEach(function (repo){
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Starts : ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                           
                        </div>
                    </div>
                
                </div>
            
            `;
        })

        document.getElementById('repos').innerHTML = output
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }

    clearAlertMsg(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    showAlert(msg,className){
        this.clearAlertMsg();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg))
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div,search)

    }
}