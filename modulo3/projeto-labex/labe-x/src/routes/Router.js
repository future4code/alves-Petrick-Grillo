import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "../pages/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage"
import CreateTripPage from "../pages/CreateTripPage"
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import TripDetailsPage from "../pages/TripDetailsPage"
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";

export const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path="*" element={<ErrorPage/>} />
          <Route path="Trips" element={<ListTripsPage/>} />
          <Route path="ApplyTrip/:id" element ={<ApplicationFormPage/>} />
          <Route path="AdminHome" element ={<AdminHomePage/>} />
          <Route path="CreateTrip" element ={<CreateTripPage/>} />
          <Route path="DetailsTrip/:id" element ={<TripDetailsPage/>} />
          <Route path="Login" element ={<LoginPage/>} />
        </Routes>
        </BrowserRouter>
    )
}