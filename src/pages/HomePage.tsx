import Dashboard from "../components/home/Dashboard";
import Layout from "../components/common/Layout";

const HomePage = () => {
  return (
    <Layout showSidebar showNavbar>
      <Dashboard />
    </Layout>
  );
};

export default HomePage;
