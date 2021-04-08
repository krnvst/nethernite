import request from '@/helpers/request'

const endpoints = {
	popular: '/stats/packages',
	package: '/package/npm',
}

async function getPopularPackages(limit = 10) {
	return request({
		url: `${endpoints.popular}?limit=${limit}`,
		method: 'get',
	});
}

async function getPackageByName(name) {
	return request({
		url: `${endpoints.package}/${name}`,
		method: 'get',
	});
}

export { getPopularPackages, getPackageByName }
