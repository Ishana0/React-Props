import { Component } from "react";
import "./App.css"

export default class AppClass extends Component {

  // code here
  render(props) {
    const img = this.props.data

    return (
      <>
        <div>
          <h1>Kalvium Gallery</h1>
          <div className="image-container">
            {
              img.map((item) => {
                return (
                  <div key={item.id}>
                    <img src={item.img} alt="elephant" />
                  </div>
                );
              })
            }
          </div>
          <div>Using Class Components</div>
        </div>
      </>
    )
  }
}
