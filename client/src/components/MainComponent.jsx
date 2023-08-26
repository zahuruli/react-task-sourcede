import React from "react";
import Card from "./card/Card";
import { WiMoonThirdQuarter } from "react-icons/wi";

const MainComponent = () => {
  return (
    <section className="main-section">
      <div className="section-container">
        <div className="card-section">
          {/* /===========/card */}
          <div className="incompleate common">
            <div className="top-div">
              <div className="top-left">
                <span className="red-icon">
                  {" "}
                  <WiMoonThirdQuarter size={"3rem"} />
                </span>
                <span> Incompleate </span>
              </div>
              <div className="top-right">
                <button>0</button>
              </div>
            </div>
            <div className="card-div">
              <div className="card-holder">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
          {/* /===========/card */}
          <div className="todo common">
            <div className="top-div">
              <div className="top-left">
                <span className="blue-icon">
                  {" "}
                  <WiMoonThirdQuarter size={"3rem"} />
                </span>
                <span> To Do </span>
              </div>
              <div className="top-right">
                <button>0</button>
              </div>
            </div>
            <div className="card-div">
              <div className="card-holder">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
          {/* /===========/card */}
          <div className="Doing common">
            <div className="top-div">
              <div className="top-left">
                <span className="yellow-icon">
                  {" "}
                  <WiMoonThirdQuarter size={"3rem"} />
                </span>
                <span> Doing </span>
              </div>
              <div className="top-right">
                <button>0</button>
              </div>
            </div>
            <div className="card-div">
              <div className="card-holder">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
          {/* /===========/card */}
          <div className="review common">
            <div className="top-div">
              <div className="top-left">
                <span> Under Review </span>
              </div>
              <div className="top-right">
                <button>0</button>
              </div>
            </div>
            <div className="card-div">
              <div className="card-holder">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
          {/* /===========/card */}
          <div className="compleated common">
            <div className="top-div">
              <div className="top-left">
                <span> Compleated </span>
              </div>
              <div className="top-right">
                <button>0</button>
              </div>
            </div>
            <div className="card-div">
              <div className="card-holder">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
          {/* /===========/card */}
          <div className="Overdate common">
            <div className="top-div">
              <div className="top-left">
                <span> Overdate </span>
              </div>
              <div className="top-right">
                <button>0</button>
              </div>
            </div>
            <div className="card-div">
              <div className="card-holder">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainComponent;
