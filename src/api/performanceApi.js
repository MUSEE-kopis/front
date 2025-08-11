import { post, get, del, getBlob } from './base';
import { PERFORMANCE_URL, USER_GENRE_URL } from '../constants/api';

export const getPopularPerformanceApi = async () => {
  const response = await get(PERFORMANCE_URL.popular);
  return response;
};

export const getRecommendPerformanceApi = async () => {
  const response = await get(PERFORMANCE_URL.recommend);
  return response;
};

export const getRandomPerformanceApi = async () => {
  const response = await get(PERFORMANCE_URL.random);
  return response;
};

export const getCustomPerformanceApi = async () => {
  const response = await get(PERFORMANCE_URL.custom);
  return response;
};

export const getDetailPerformanceApi = async (performanceId) => {
  const response = await get(PERFORMANCE_URL.detail(performanceId));
  return response;
};

export const getPerformanceLikedApi = async (performanceId) => {
  const response = await get(PERFORMANCE_URL.like(performanceId));
  return response;
};

export const postLikePerformanceApi = async (performanceApi) => {
  const response = await post(PERFORMANCE_URL.like(performanceApi));
  return response;
};

export const deleteLikePerformanceApi = async (performanceId) => {
  const response = await del(PERFORMANCE_URL.like(performanceId));
  return response;
};

export const getMyLikePerformanceApi = async () => {
  const response = await get(PERFORMANCE_URL.myLike);
  return response;
};

export const getPosterApi = async (performanceId) => {
  const response = await getBlob(PERFORMANCE_URL.poster(performanceId));
  return response;
};

export const getSearchPerformanceApi = async (keyword) => {
  const response = await get(PERFORMANCE_URL.search, {params: {keyword}});
  return response;
};

export const getOnboardingPerformanceApi = async () => {
  const response = await get(USER_GENRE_URL.onboarding);
  return response;
};

export const postOnboardingPerformanceApi = async (data) => {
  const response = await post(USER_GENRE_URL.onboarding, data);
  return response;
}