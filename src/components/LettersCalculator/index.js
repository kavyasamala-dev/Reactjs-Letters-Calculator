import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInputPhrase = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="count-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label htmlFor="phrase" className="para">
                Enter the phrase
              </label>
              <input
                id="phrase"
                type="text"
                className="input-content"
                placeholder="calculator"
                onChange={this.onChangeInputPhrase}
                value={inputPhrase}
              />
            </div>
          </div>
          <div className="button-container">
            <p className="button">No.of letters: {inputPhrase.length}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
