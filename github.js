// creating class to get the data from api

class Github {
    constructor() {
        // storing the data
        this.client_id = '7418557bafb34c927b6d';
        this.Client_Secret = 'e7fb0e38d3f56fdc53d131ceb6b65fd201cdbf68';
        this.repo_count = 5;
        this.repo_sort = 'created: asc';
    }

    async getUser(user) {
        // fething the profile and repos and storing
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&Client_Secret=${this.Client_Secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // storing the profile and repo in json format
        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        // returning the profile and repo
        return {
            profile,
            repos
        }
    }
}