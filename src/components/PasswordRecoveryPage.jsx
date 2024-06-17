import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './styles.css';  // Import custom styles

const PasswordRecoveryPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center mb-4" style={{ color: '#FFCC08' }}>Recover Password</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" style={{ backgroundColor: '#FFCC08', borderColor: '#FFCC08' }}>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                  </div>
                </div>
                <button type="submit" className="btn btn-custom btn-block">Send Recovery Link</button>
                <div className="text-center mt-3">
                  <a href="/login" className="custom-link">Back to Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordRecoveryPage;
