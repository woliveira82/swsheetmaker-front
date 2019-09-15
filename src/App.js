import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div className='col'>
          <div className='config'>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 center-block">
                <form className="form-signin">
                  <div className="form-label-group">
                    <div className="row">
                      <div className="col text-center">
                      </div>
                    </div>
                    <div className="row">
                      <div className="col text-center">
                        Choose a scenario
                              <select name="scenario" className="form-control">
                          <option value="" disabled selected>Choose a scenario...</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col text-center">
                        Choose a character
                                  <select name="character" className="form-control">
                          <option value="" disabled selected>Choose a character...</option>
                          <option value="newchar">Create a new character</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col text-center">
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Play</button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col text-center">
                        <button className="btn btn-lg btn-secondary btn-block" type="submit">Configuration</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
