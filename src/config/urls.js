export const API_BASE_URL = "http://192.168.248.1:8080";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const LOGIN = getApiUrl('/auth/login')
export const SIGNUP = getApiUrl('/auth/register');
export const SIGNUP_FIRST_PAGE = getApiUrl('/auth/register-first-page');


export const CONFIRM_PIN = getApiUrl('/auth/confirmpin');
export const SET_INITIAL_BALANCE = getApiUrl('/balance/set-initial-balance');
export const GET_BALANCE = getApiUrl('/balance/get-balance');
export const ADD_BALANCE_REQUEST = getApiUrl('/balance/add-balance-request');

export const PLACE_MOBILE_BANKING_ORDER = getApiUrl('/order/add-mobile-banking-order');
export const FETCH_MOBILE_BANKING_TRANSACTION = getApiUrl('/order/get-all-mobile-banking-order');
export const PLACE_BANKING_ORDER = getApiUrl('/order/add-banking-order');
export const FETCH_BANKING_TRANSACTION = getApiUrl('/order/get-all-banking-order');

export const PLACE_BILL_PAY_ORDER = getApiUrl('/order/add-bill-pay-order');
export const FETCH_BILL_PAY_TRANSACTION = getApiUrl('/order/get-all-bill-pay-order');
export const PLACE_RECHARGE_ORDER = getApiUrl('/order/add-recharge-order');
export const FETCH_RECHARGE_TRANSACTION = getApiUrl('/order/get-all-recharge-order');
export const GET_OFFER_PACKAGES = getApiUrl('/offer/get-all-offers');
export const PLACE_OFFER_ORDER = getApiUrl('/offer/place-offer-order');
export const FETCH_OFFER_PACKAGE_TRANSACTION = getApiUrl('/order/get-all-offer-order');





export const GET_COMMISSION = getApiUrl('/commission/get-commission');
export const GET_SLIDER_IMAGE = getApiUrl('/slider/get-slider-images');
export const GET_PAYMENT_METHOD = getApiUrl('/payment/get-payment-method');














