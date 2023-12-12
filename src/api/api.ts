import service from '../utils/request';

export default function useApi() {
    return {
		savePhone: (params?: object) => {
			return service({
				url: 'getPhoneCode',
				method: 'get',
				params,
			});
		},
		getStatistic: (params?: object) => {
			return service({
				url: 'getStatistic',
				method: 'get',
				params,
			});
		},
		getLink: (params?: object) => {
			return service({
				url: 'getLink',
				method: 'get',
				params,
			});
		},
		incClick: (params?: object) => {
			return service({
				url: 'incClick',
				method: 'get',
				params,
			});
		},
    }
}
