import axios from 'axios'
import config from '@/helpers/config'

const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json'
}

const service = axios.create({
	baseURL: `${config.jsdelivrURL}`,
	timeout: 5000,
	headers
})

// response interceptor
service.interceptors.response.use(
	response => {
		if (response.status >= 400) {
			console.error('Нет доступа к данной странице')
		} else {
			return response
		}
	},
	error => {
		console.error(error)
		return Promise.reject(error)
	}
)

export default service
