export const API_BASE_URL = "http://192.168.248.1:8080";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const LOGIN = getApiUrl('/auth/login')
export const SIGNUP = getApiUrl('/auth/register');
export const CONFIRM_PIN = getApiUrl('/auth/confirmpin');
export const SET_INITIAL_BALANCE = getApiUrl('/balance/set-initial-balance');
export const GET_BALANCE = getApiUrl('/balance/get-balance');