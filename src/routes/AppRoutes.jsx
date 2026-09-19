import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { HomePage } from '../pages/HomePage'
import { ProfilePage } from '../pages/ProfilePage'
import { PortfolioPage } from '../pages/PortfolioPage'
import { EducationPage } from '../pages/EducationPage'
import { LoginPage } from '../pages/LoginPage'
import { FuelPage } from '../pages/FuelPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/fuel" element={<FuelPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
