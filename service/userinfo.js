import { API_BASE_URL, SEC_TOKEN } from './config';

const BASE_URL = `${API_BASE_URL}/userinfo/`;

export const signUp = (firstName, lastName, email, phone, mobile, affiliateID, ipAddr, brandID) => {

}

export const checkMail = (memberID, email, brandID) => {

}

export const login = (email, password, brandID) => {

}

export const loginIsPaid = (email, password, brandID) => {

}

export const getMoneyBalance = (memberID, brandID) => {

}

export const getPersonalDetailsByID = (memberID, brandID) => {

}

export const getPersonalDetailsByEmail = (email, brandID) => {

}

export const updatePersonalDetails = (
    email, password, firstName, lastName,
    memberID, phone, mobile, countryCode,
    address, city, state, zipCode, brandID
) => {

}

export const updatePassword = (email, password, memberID, brandID) => {

}

export const getTransactionsByID = (page, pageSize, memberID, brandID) => {

}

export const getTransactionAmountByID = (transID, memberID, brandID) => {

}

export const getPurchaseDetails = (sessionID, pmCounter, brandID) => {

}

export const getCreditCardMethodByID = (isDef, memberID, brandID) => {

}

export const updateCreditCard = (
    payID, cardType, holderName, cardNo,
    CVV, expireDate, memberID, brandID) => {

}

export const deleteCreditCard = (payID, memberID, brandID) => {

}

export const verifyResetPwdLink = (brandID, encryptedQuery) => {

}

export const updatePassword = (memberID, brandID, email, password) => {

}
