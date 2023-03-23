import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserData } from './asyncStorage';
import { saveUserData } from '../redux/actions/auth';


import { CONFIRM_PIN, LOGIN,SIGNUP,GET_BALANCE,PLACE_MOBILE_BANKING_ORDER } from '../config/urls';
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
		
		
		if(result.data.success && endPoint==SIGNUP){
			
				return 'signup-success'
			
		}else if(!result.data.success && endPoint==SIGNUP){
			
			return result.data.message
		
	}

		if(result.data.success && endPoint==LOGIN){
			return ['login-success',result.data]

		}
		
		if(result.data.success && endPoint==CONFIRM_PIN){
			return 'verify-pin-success'
		}else if(!result.data.success && endPoint==CONFIRM_PIN){
			
				return result.data.message
			
		}
		if(result.data.success && endPoint==GET_BALANCE){
			
			return result.data.balance
		}else if(!result.data.success && endPoint==GET_BALANCE){
			
			return false
		
	}

	if( result.data.success && endPoint==PLACE_MOBILE_BANKING_ORDER){
		return ['mobile-banking-order-success',result.data]
		
			
		
	}else if( !result.data.success && endPoint==PLACE_MOBILE_BANKING_ORDER){
		
		return result.data.message
	
		}	
	
		
		
	} catch (error) {
		showError(error)
		
	}

}

export async function apiGet(endPoint, data, headers) {
	try {
		const result = await axios({method:'get',url:endPoint,headers:headers,data:data})
		
	} catch (error) {
		showError(error)
		
	}
}



// export async function apiReq(
// 	endPoint,
// 	data,
// 	method,
// 	headers,
// 	requestOptions = {}
// ) {

// 	return new Promise(async (res, rej) => {
// 		const getTokenHeader = await getHeaders();
// 		headers = {
// 			...getTokenHeader,
// 			...headers
// 		};

// 		if (method === 'get' || method === 'delete') {
// 			data = {
// 				...requestOptions,
// 				...data,
// 				headers
// 			};
// 		}

// 		axios[method](endPoint, data, { headers })
// 			.then(result => {

// 				const { data } = result;

// 				if (data.status === false) {
// 					return rej(data);
// 				}

// 				return res(data);
// 			})
// 			.catch(error => {
// 				console.log(error)
// 				console.log(error && error.response, 'the error respne')
// 				if (error && error.response && error.response.status === 401) {
// 					clearUserData();
// 					// NavigationService.resetNavigation();
// 					//NavigationService.navigate('loginUsingEmailScreen');
// 					dispatch({
// 						type: types.CLEAR_REDUX_STATE,
// 						payload: {}
// 					});
// 					dispatch({
// 						type: types.NO_INTERNET,
// 						payload: { internetConnection: true },
// 					});


// 				}
// 				if (error && error.response && error.response.data) {
// 					if (!error.response.data.message) {
// 						return rej({ ...error.response.data, msg: error.response.data.message || "Network Error" })
// 					}
// 					return rej(error.response.data)
// 				} else {
// 					return rej({ message: "Network Error", msg: "Network Error" });
// 				}
// 				return rej(error);
// 			});
// 	});
// }



// export function apiPost(endPoint, data, headers = {}) {

// 	return apiReq(endPoint, data, 'post', headers);
// }

// export function apiDelete(endPoint, data, headers = {}) {
// 	return apiReq(endPoint, data, 'delete', headers);
// }



export function apiPut(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'put', headers);
}



