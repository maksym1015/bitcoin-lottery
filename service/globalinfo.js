import { API_BASE_URL, SEC_TOKEN } from './config';
import { authPost } from './base';

const BASE_URL = `${API_BASE_URL}/globalinfo`;

export const getLotteryRules = async () => {
    return await authPost(
        `${BASE_URL}/lottery-rules`,
        SEC_TOKEN
    );
}

export const getAllLotteries = async () => {
    return await authPost(
        `${BASE_URL}/get-all-lotteries`,
        SEC_TOKEN
    );
}

export const getAllDraws = async (brandID, basePriceEnabled) => {
    return await authPost(
        `${BASE_URL}/get-all-lotteries`,
        SEC_TOKEN,
        {
            BrandID: brandID,
            BasePriceEnabled: basePriceEnabled
        }
    );
}

export const getLotteriesResults = async () => {
    return await authPost(
        `${BASE_URL}/get-all-lotteries`,
        SEC_TOKEN
    );
}

export const getLottoLastResultsAndPrizes = async (numResults, brandID) => {
    return await authPost(
        `${BASE_URL}/get-lotteries-last-results-prizes-brand`,
        SEC_TOKEN,
        {
            BrandID: brandID,
            NumberOfResults: numResults
        }
    );
}

export const getLottoResultsByDate = async (start, end, brandID) => {
    return await authPost(
        `${BASE_URL}/get-lotteries-results-by-date`,
        SEC_TOKEN,
        {
            BrandID: brandID,
            StartDate: start,
            EndDate: end
        }
    );
}

export const getLottoLastResults = async () => {
    return await authPost(
        `${BASE_URL}/get-lotteries-last-results`,
        SEC_TOKEN
    );
}

export const getLottoLastResultsPrizes = async () => {
    return await authPost(
        `${BASE_URL}/get-lotteries-last-results-prizes`,
        SEC_TOKEN
    );
}

export const getPricesAndDiscounts = async (numDraws, productID, brandID) => {
    return await authPost(
        `${BASE_URL}/get-prices-and-discounts`,
        SEC_TOKEN,
        {
            BrandID: brandID,
            NumberOfDraws: numDraws,
            ProductID: productID
        }
    );
}

export const getGroupPricesAndDiscounts = async (brandID) => {
    return await authPost(
        `${BASE_URL}/get-group-prices-and-discounts`,
        SEC_TOKEN,
        { BrandID: brandID }
    );
}

export const getPricesByProducts = async (brandID, products) => {
    return await authPost(
        `${BASE_URL}/get-prices-by-brand-and-productid`,
        SEC_TOKEN,
        {
            BrandID: brandID,
            ProductIds: products
        }
    );
}

export const getResultsByBrand = async (brandID) => {
    return await authPost(
        `${BASE_URL}/get-lotteries-results-by-brand`,
        SEC_TOKEN,
        { BrandID: brandID }
    );
}

export const getProductRules = async (brandID) => {
    return await authPost(
        `${BASE_URL}/product-rules`,
        SEC_TOKEN,
        { BrandID: brandID }
    );
}