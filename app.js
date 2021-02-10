// init the class
const github = new Github;
const ui = new UI;

// grabing the test
const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('message is not found', 'alert alert-danger');
                } else {
                    console.log(data)
                    ui.showProfile(data.profile);
                    ui.showRepo(data.repos);
                }
            })
    } else {
        ui.clearProfile();
    }
})