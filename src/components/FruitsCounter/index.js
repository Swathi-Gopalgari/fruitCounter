import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango1: 0, banana1: 0}

  mango = () => {
    this.setState(prev => ({mango1: prev.mango1 + 1}))
  }

  banana = () => {
    this.setState(prev => ({banana1: prev.banana1 + 1}))
  }

  render() {
    const {mango1} = this.state

    const {banana1} = this.state
    return (
      <div className="main">
        <div className="container">
          <h1 className="head">
            Bob ate <span className="span">{mango1}</span> mangoes
            <span className="span">{banana1}</span> bananas
          </h1>
          <div className="fruit_container">
            <div className="first">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit1"
              />
              <button className="but" type="button" onClick={this.mango}>
                Eat Mango
              </button>
            </div>
            <div className="first">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="fruit2"
              />
              <button className="but" type="button" onClick={this.banana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
