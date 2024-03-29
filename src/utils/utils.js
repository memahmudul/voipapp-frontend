import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserData } from './asyncStorage';
import { saveUserData } from '../redux/actions/auth';


import { CONFIRM_PIN, 
	LOGIN,
	SIGNUP,
	GET_BALANCE,
	PLACE_MOBILE_BANKING_ORDER, 
	FETCH_ALL_TRANSACTION,
	PLACE_BANKING_ORDER,PLACE_BILL_PAY_ORDER,
	PLACE_RECHARGE_ORDER, 
	FETCH_BANKING_TRANSACTION,
	FETCH_MOBILE_BANKING_TRANSACTION,
	FETCH_BILL_PAY_TRANSACTION,
	FETCH_RECHARGE_TRANSACTION, 
	GET_OFFER_PACKAGES,
	PLACE_OFFER_ORDER,
	FETCH_OFFER_PACKAGE_TRANSACTION,
	SIGNUP_FIRST_PAGE, 
	ADD_BALANCE_REQUEST,
GET_COMMISSION,
GET_SLIDER_IMAGE,
GET_PAYMENT_METHOD,
GET_NOTIFICATIONS} from '../config/urls';
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

		if(result.data.success && endPoint==SIGNUP_FIRST_PAGE){
			
			return 'signup-first-page-validation-success'
		
	}else if(!result.data.success && endPoint==SIGNUP_FIRST_PAGE){
		
		return result.data.message
	
}
		
		
		
		if(result.data.success && endPoint==SIGNUP){
			
				return 'signup-success'
			
		}else if(!result.data.success && endPoint==SIGNUP){
			
			return result.data.message
		
	}

		if(result.data.success && endPoint==LOGIN){
			return ['login-success',result.data]
			

		}else if(!result.data.success && endPoint==LOGIN){
			return [result.data.message]
			

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


		if(result.data.success && endPoint==FETCH_MOBILE_BANKING_TRANSACTION){
			return result.data.result
			
			
				
			
		}else if( !result.data.success && endPoint==FETCH_MOBILE_BANKING_TRANSACTION){
			
			return false;
		
			}	

			if(result.data.success && endPoint==FETCH_BANKING_TRANSACTION){
				return result.data.result
				
				
					
				
			}else if( !result.data.success && endPoint==FETCH_BANKING_TRANSACTION){
				
				return false;
			
				}


			if(result.data.success && endPoint==PLACE_BANKING_ORDER){
				return ['banking-order-success',result.data.data]
				
				
				
					
				
			}else if( !result.data.success && endPoint==PLACE_BANKING_ORDER){
				
				return [result.data.message]
				
			
				}	

				if(result.data.success && endPoint==PLACE_BILL_PAY_ORDER){
					
					return ['billpay-order-success',result.data.data]
					
					
					
						
					
				}else if( !result.data.success && endPoint==PLACE_BILL_PAY_ORDER){

				
					
					 return [result.data.message]
					
				
					}
					
					
					if(result.data.success && endPoint==PLACE_RECHARGE_ORDER){
						
					
						return ['recharge-order-success',result.data.data]
						
						
						
							
						
					}else if( !result.data.success && endPoint==PLACE_RECHARGE_ORDER){
				
	
					
						
						 return [result.data.message]
						
					
						}	

					if(result.data.success && endPoint==FETCH_BILL_PAY_TRANSACTION){
						return result.data.result
						
						
							
						
					}else if( !result.data.success && endPoint==FETCH_BILL_PAY_TRANSACTION){
						
						return false;
					
						}

						if(result.data.success && endPoint==FETCH_RECHARGE_TRANSACTION){
							return result.data.result
							
							
								
							
						}else if( !result.data.success && endPoint==FETCH_RECHARGE_TRANSACTION){
							
							return false;
						
							}

							if(result.data.success && endPoint==FETCH_OFFER_PACKAGE_TRANSACTION){
								return result.data.result
								
								
									
								
							}else if( !result.data.success && endPoint==FETCH_OFFER_PACKAGE_TRANSACTION){
								
								return false;
							
								}

							if(result.data.success && endPoint==GET_OFFER_PACKAGES){
								return result.data.result
								
								
									
								
							}else if( !result.data.success && endPoint==GET_OFFER_PACKAGES){
								
								return false;
							
								}
								

								if(result.data.success && endPoint==PLACE_OFFER_ORDER){
									return ['offer-order-success',result.data.data]
									
									
										
									
								}else if( !result.data.success && endPoint==PLACE_OFFER_ORDER){
									
									return [result.data.message];
								
									}


									if(result.data.success && endPoint==ADD_BALANCE_REQUEST){
										return true
										
										
											
										
									}else if( !result.data.success && endPoint==ADD_BALANCE_REQUEST){
										
										return false
										}

										if(result.data.success && endPoint==GET_COMMISSION){
											return result.data
											
											
												
											
										}else if( !result.data.success && endPoint==GET_COMMISSION){
											
											return false
											}

											if(result.data.success && endPoint==GET_SLIDER_IMAGE){
												return result.data
												
												
													
												
											}else if( !result.data.success && endPoint==GET_SLIDER_IMAGE){
												
												return false
												}

												if(result.data.success && endPoint==GET_PAYMENT_METHOD){
													return result.data
													
													
														
													
												}else if( !result.data.success && endPoint==GET_PAYMENT_METHOD){
													
													return false
													}


													if(result.data.success && endPoint==GET_NOTIFICATIONS){
														return result.data.result
														
														
															
														
													}else if( !result.data.success && endPoint==GET_NOTIFICATIONS){
														
														return false
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



