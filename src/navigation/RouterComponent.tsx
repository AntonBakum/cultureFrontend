import { Route, Routes } from "react-router-dom";
import { CreateInitiativePageContainer } from "../ui/pages/CreateInitiativePage/CreateInitiativeContainer";
import { HomePageContainer } from "../ui/pages/HomePage/HomePageContainer";
import { InitiativesPageContainer } from "../ui/pages/InitiativesPage/InitiativesPageContainer";
import { LoginPageContainer } from "../ui/pages/LoginPage/LoginPageContainer";
import { NewsPageContainer } from "../ui/pages/NewsPage/NewsPageContainer";
import { RegistrationPageContainer } from "../ui/pages/RegistrationPage/RegistrationPageContainer";
import { ProfilePageContainer } from "../ui/pages/ProfilePage/ProfilePageContainer";
import { NewsDescriptionContainer } from "../ui/pages/NewsDescriptionPage";

export const RouterComponent = (): JSX.Element => {
  return (
      <Routes>
        <Route path="/" index element={<HomePageContainer />} />
        <Route path="/login" element={<LoginPageContainer />} />
        <Route path="/registration" element={<RegistrationPageContainer />} />
        <Route path="/news" element={<NewsPageContainer />}/>
        <Route index path="news/:id" element={<NewsDescriptionContainer />} />
        <Route path="/initiatives" element={<InitiativesPageContainer />} />
        <Route path="/create" element={<CreateInitiativePageContainer />} />
        <Route path="/profile" element={<ProfilePageContainer />} />
        <Route path="/*" element={<div>Error! Page not found</div>} />
      </Routes>
  );
};
