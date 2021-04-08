import request from '@/helpers/request'
import config from '@/helpers/config'

const endpoints = {
	npmSearch: `${config.npmSearchAPI}-/v1/search`,
}

async function searchPackages(name, size) {
	return request({
		url: `${endpoints.npmSearch}?text=${name}&size=${size}`,
		method: 'get',
	});
}

export { searchPackages }
