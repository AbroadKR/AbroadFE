import { AuthService } from './firebase'

const google = document.querySelector('.googleBtn')
const github = document.querySelector('.githubBtn')

const authService = new AuthService()

const onLogin = (event) => {
  authService
    .login(event.currentTarget.textContent)
    .then((data) => goToMaker(data.user.uid))
}

google.addEventListener('click', onLogin)
github.addEventListener('click', onLogin)
