document.getElementById('search').addEventListener('click', () => {
    const searchUser = document.getElementById('searchUser');
    const searchUserValue = searchUser.value;
    if (searchUserValue === '') {
        alert('Enter user name');
    } else {
        fetchGithubUser(searchUserValue);
    }

})
const fetchGithubUser = (value) => {
    fetch(`https://api.github.com/users/${value}`)
        .then(res => res.json())
        .then(data => showUser(data))
        .catch(error => console.log(error))
}
const showUser = (user) => {

}