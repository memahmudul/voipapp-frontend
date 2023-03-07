import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserData } from './asyncStorage';
import { saveUserData } from '../redux/actions/auth';


import { CONFIRM_PIN, LOGIN,SIGNUP } from '../config/urls';
import { showError } from './helperFunction';


export async function getHeaders() {
	let userData = await AsyncStorage.getItem('userData');
	if (userData) {
		userData = JSON.parse(userData);
		//console.log(userData.accessToken, 'header')
		return {
			authorization: `${userData.token}`,
		};
	}
	return {};
}


export async function apiPost(endPoint,data,headers){
	
	const getTokenHeader = await getHeaders();
	
	
	headers = {
		...getTokenHeader,
		...headers
	};
	
	try {
		
		const result = await axios({method:'post',url:endPoint,headers:headers,data:data})
		if(endPoint==LOGIN){
			setUserData(result.data); //to add user data to async storage
		console.log('user data saved successfully to async storage');
		saveUserData(result.data) //to update state so that everything gets rendered

		}
		if(result.data && endPoint==SIGNUP){
			console.log('signup executing');
			console.log(result.data);
			return 'signup-success'

		}
		if(result.data && endPoint==CONFIRM_PIN){
			return 'verify-pin-success'
		}
	
		
		
	} catch (error) {
		showError(error)
		
	}

}



export async function apiReq(
	endPoint,
	data,
	method,
	headers,
	requestOptions = {}
) {

	return new Promise(async (res, rej) => {
		const getTokenHeader = await getHeaders();
		headers = {
			...getTokenHeader,
			...headers
		};

		if (method === 'get' || method === 'delete') {
			data = {
				...requestOptions,
				...data,
				headers
			};
		}

		axios[method](endPoint, data, { headers })
			.then(result => {

				const { data } = result;

				if (data.status === false) {
					return rej(data);
				}

				return res(data);
			})
			.catch(error => {
				console.log(error)
				console.log(error && error.response, 'the error respne')
				if (error && error.response && error.response.status === 401) {
					clearUserData();
					// NavigationService.resetNavigation();
					//NavigationService.navigate('loginUsingEmailScreen');
					dispatch({
						type: types.CLEAR_REDUX_STATE,
						payload: {}
					});
					dispatch({
						type: types.NO_INTERNET,
						payload: { internetConnection: true },
					});


				}
				if (error && error.response && error.response.data) {
					if (!error.response.data.message) {
						return rej({ ...error.response.data, msg: error.response.data.message || "Network Error" })
					}
					return rej(error.response.data)
				} else {
					return rej({ message: "Network Error", msg: "Network Error" });
				}
				return rej(error);
			});
	});
}



// export function apiPost(endPoint, data, headers = {}) {

// 	return apiReq(endPoint, data, 'post', headers);
// }

export function apiDelete(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
	return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'put', headers);
}



