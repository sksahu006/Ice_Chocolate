import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLayout from './componentes/layouts/UserLayout';
import AdminLayout from './componentes/layouts/AdminLayout';
import ManageOrders from './pages/admin/ManageOrders';
import ManageUsers from './pages/admin/ManageUsers';
import ManageProducts from './pages/admin/ManageProducts';
import AdminDashboard from './pages/admin/AdminDashboard';
import Cart from './pages/users/Cart';
import ProductDetail from './pages/users/ProductDetail';
import Home from './pages/users/Home';
import Login from './pages/auth/Login';
import Checkout from './pages/users/Checkout';
import OrderDetails from './pages/users/OrderDetails';

function App() {
  return (
    <Router>
      <Routes>
        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-details" element={<OrderDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<ManageProducts />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="orders" element={<ManageOrders />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
