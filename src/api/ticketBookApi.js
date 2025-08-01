import { get, post, formDataPost, patch, del } from './base';
import { TICKET_BOOK_URL, GENRE_URL, ACTOR_URL } from '../constants/api';

export const getTicketBooksApi = async () => {
  const response = await get(TICKET_BOOK_URL.ticketBooks);
  return response;
};

export const postTicketBookApi = async (data) => {
  const response = await post(TICKET_BOOK_URL.ticketBooks, data);
  return response;
};

export const postGenreApi = async (genres, performanceId) => {
  const response = await post(GENRE_URL.genre, { genres, performanceId });
  return response;
};

export const patchGenreApi = async (genres, performanceId) => {
  const response = await patch(GENRE_URL.genre, { genres, performanceId });
  return response;
};

export const getTicketBookDetailApi = async (ticketBookId) => {
  const response = await get(TICKET_BOOK_URL.detail(ticketBookId));
  return response;
};

export const updateTicketBookApi = async (ticketBookId, data) => {
  const response = await patch(TICKET_BOOK_URL.detail(ticketBookId), data);
  return response;
};

export const deleteTicketBookApi = async (ticketBookId) => {
  const response = await del(TICKET_BOOK_URL.detail(ticketBookId));
  return response;
};

export const getMonthTicketBooksApi = async (year, month) => {
  const response = await get(TICKET_BOOK_URL.month, { params: { year, month } });
  return response;
};

export const postShareApi = async () => {
  const response = await formDataPost(TICKET_BOOK_URL.share);
  return response;
};

export const getShareApi = async (identifier) => {
  const response = await get(TICKET_BOOK_URL.getShare(identifier));
  return response;
};

export const getActorSearchApi = async (name) => {
  const response = await get(ACTOR_URL.search(name));
  return response.data;
};