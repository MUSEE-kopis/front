export const USER_GENRE_URL = {
  onboarding: '/users/genre/onboarding',
}

export const PERFORMANCE_URL = {
  detail: (performanceId) => `/performances/${performanceId}`,
  state: '/performances/state',
  random: '/performances/random',
  recommend: '/performances/recommend',
  popular: '/performances/popular',
  like: (performanceId) => `/performances/${performanceId}/like`,
  myLike: '/performances/like',
  poster: (performanceId) => `/performances/poster/${performanceId}`,
  search: '/performances/search',
}

export const REVIEW_URL = {
  review: '/reviews',
  public: (performanceId) => `/reviews/public/${performanceId}`,
  private: (performanceId) => `/reviews/private/${performanceId}`,
}

export const AUTH_URL = {
  kakao: '/oauth/login/kakao',
  userInfo: '/oauth/mypage',
  nickname: (nickname) => `/oauth/username?username=${nickname}`,
}

export const TICKET_BOOK_URL = {
  ticketBooks: '/ticketBooks',
  detail: (ticketBookId) => `/ticketBooks/${ticketBookId}`,
  month: '/ticketBooks/month',
  date: '/ticketBooks/date',
  share: '/ticketBooks/share',
  getShare: (ticketBookId) => `/ticketBooks/share/${ticketBookId}`,
}

export const PHOTO_URL = {
  upload: '/photos',
}

export const GENRE_URL = {
  genre: '/genre',
}

export const ACTOR_URL = {
  actor: '/actors',
  search: (name) => `/actors/search?actorName=${name}`,
}