import { get, patch } from './base';
import { AUTH_URL } from '../constants/api';

export const getOAuthKakaoApi = async (code) => {
  const response = await get(AUTH_URL.kakao, {params: {code}});
  return response;
};

export const getUserInfoApi = async () => {
  const response = await get(AUTH_URL.userInfo);
  return response;
};

export const patchUserNicknameApi = async (data) => {
  const response = await patch(AUTH_URL.nickname(data));
  return response;
};