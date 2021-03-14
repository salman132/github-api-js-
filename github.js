class Github{
    constructor() {
        this.client_id = 'd423dde98bb545da0872';
        this.client_secret = '373f3780dc3e517db8cee95cfc38dc8facfd45df';
        this.repos_count =5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await
            fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret  }`);
        const repoResponse = await
            fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret  }`);
        const profileData = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile: profileData,
            repos: repos,

        }
    }
}