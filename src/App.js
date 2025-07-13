import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Div } from "./components/common/div";
import { Main, Detail, Favorite, Search, CreateBook, TicketBook, TicketBookDetail, Mypage, Login, Onboarding, SharedBook, SharedTicketBookDetail, SearchCastMembers } from "./pages";
import KakaoRedirectPage from "./components/pages/login/KakaoRedirectPage";
import { PublicRoute, PrivateRoute } from "./components/auth";
import { StyledToastConatiner } from "./components/common/Toast";

const App = () => {
  return(
    <BrowserRouter>
      <Div $height='100vh' $margin='0 auto' $overflow='auto'>
        <StyledToastConatiner limit={1} />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Main />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search-cast-member/:performanceId" element={<SearchCastMembers />} />
            <Route path="/ticket" element={<TicketBook />} />
            <Route path="/book-detail/:ticketBookId" element={<TicketBookDetail />} />
            <Route path="/create-book/:performanceId" element={<CreateBook />} />
            <Route path="/onboarding" element={<Onboarding />} />
          </Route>
          <Route path="/shared-book-detail/:ticketBookId" element={<SharedTicketBookDetail />} />
          <Route path="/ticketBooks/share/:id" element={<SharedBook />} />
          <Route path="/oauth/redirected/kakao" element={<KakaoRedirectPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Div>
    </BrowserRouter>
  )
}

export default App;
