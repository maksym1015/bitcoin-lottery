import { API_BASE_URL, SEC_TOKEN } from './config';
import { authPost } from './base';

const BASE_URL = `${API_BASE_URL}/globalinfo`;

export const validateTicket = async (lottoType, selNumber) => {
    try {
        const data = await authPost(`${BASE_URL}/lottery-rules`, SEC_TOKEN);
        return data;
    } catch(error) {
        console.log(error);
    }
}

export const lotteryRules = () => {

}

export const getAllLotteries = () => {

}

export const getAllDraws = (brandID, basePriceEnabled) => {

}

export const getLotteriesResults = () => {

}

export const getLottoLastResultsAndPrizes = (numResults, brandID) => {

}

export const getLottoResultsByDate = (start, end, brandID) => {

}

export const getLottoLastResults = () => {

}

export const getLottoLastResultsPrizes = () => {

}

export const getPricesAndDiscounts = (numDraws, productID, brandID) => {

}

export const getGroupPricesAndDiscounts = (brandID) => {

}