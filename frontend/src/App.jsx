// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import TokenTracker from './pages/TokenTracker';
// import Events from './pages/Events';
// import Registration from './pages/Registration';
// import Login from './pages/Login';
// import Dashboard from './pages/dashboard/Dashboard';
// import DashboardHome from "./pages/dashboard/DashboardHome";
// import GalleryUpload from "./pages/dashboard/GalleryUpload";
// // Import the dashboard sections from their new, separate files
// import UsersSection from './pages/dashboard/UsersSection';
// import TokensSection from './pages/dashboard/TokensSection';
// import PaymentSection from './pages/dashboard/PaymentSection';
// import SettingsSection from './pages/dashboard/SettingsSection';
// import ContestDetailsSection from './pages/dashboard/ContestDetailsSection';

// import { AuthProvider } from './AuthContext';
// import PrivateRoute from './PrivateRoute';

// const PublicLayout = () => (
//   <div className="flex flex-col min-h-screen">
//     <Navbar />
//     <main className="flex-grow">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/events" element={<Events />} />
//         <Route path="/register" element={<Registration />} />
//       </Routes>
//     </main>
//     <Footer />
//   </div>
// );

// const App = () => {
//   return (
//     <Router>
//       <AuthProvider>
//         <Routes>
//           {/* Public Routes with Navbar and Footer */}
//           <Route path="/*" element={<PublicLayout />} />
//           <Route path="/track" element={<TokenTracker />} />

//           {/* Admin Login Route */}
//           <Route path="/admin-login" element={<Login />} />

//           {/* Protected Dashboard Routes.
//             This new structure renders the Dashboard component with a nested Outlet
//             and displays the specific section components inside it.
//           */}
//           <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
           
            
        
//             {/* <Route path="dashboard" element={<DashboardHome />} /> */}


//             <Route index element={<DashboardHome />} />
//         <Route path="users" element={<UsersSection />} />


//             {/* <Route path="users" element={<UsersSection />} /> */}
//             <Route path="tokens" element={<TokensSection />} />
//             <Route path="payments" element={<PaymentSection />} />
//             <Route path="gallery" element={<GalleryUpload />} />
//             <Route path="contest-details" element={<ContestDetailsSection />} />
//             <Route path="settings" element={<SettingsSection />} />
//           </Route>
//         </Routes>
//       </AuthProvider>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route,Outlet  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TokenTracker from './pages/TokenTracker';
import Events from './pages/Events';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardHome from "./pages/dashboard/DashboardHome";
import GalleryUpload from "./pages/dashboard/GalleryUpload";
import UsersSection from './pages/dashboard/UsersSection';
import TokensSection from './pages/dashboard/TokensSection';
import PaymentSection from './pages/dashboard/PaymentSection';
import SettingsSection from './pages/dashboard/SettingsSection';
import ContestDetailsSection from './pages/dashboard/ContestDetailsSection';

import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';

// This component will contain all the public routes that use the Navbar and Footer
const PublicLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <Outlet /> {/* Use Outlet to render nested public routes */}
    </main>
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes - these paths will be rendered inside PublicLayout */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="events" element={<Events />} />
            <Route path="register" element={<Registration />} />
            <Route path="track" element={<TokenTracker />} />
          </Route>

          {/* Admin Login is a standalone route */}
          <Route path="/admin-login" element={<Login />} />

          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route index element={<DashboardHome />} />
            <Route path="users" element={<UsersSection />} />
            <Route path="tokens" element={<TokensSection />} />
            <Route path="payments" element={<PaymentSection />} />
            <Route path="gallery" element={<GalleryUpload />} />
            <Route path="contest-details" element={<ContestDetailsSection />} />
            <Route path="settings" element={<SettingsSection />} />
          </Route>

          {/* Catch-all for 404 pages, or other logic */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};
 
export default App;