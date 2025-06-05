import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold fs-4">
            Research Portal
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-5">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/find-supervisor" className="nav-link text-white">
                  Find Supervisor
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/popular-stats" className="nav-link">
                  Popular Stats
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-light text-dark py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">Welcome to the Research Supervisor Finder!</h1>
          <p className="lead mb-4">
            Discover expert supervisors tailored to your research interests and academic journey.
          </p>
          <Link to="/find-supervisor" className="btn btn-primary btn-lg me-3">
            Find a Supervisor
          </Link>
          <Link to="/popular-stats" className="btn btn-outline-primary btn-lg">
            View Popular Analysis
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
