import React, { Component } from 'react'
import './App.css'
import { MODE_LIST, transformScreen } from './resize'

const SIZE_LIST = [
  {
    width: 1920,
    height: 1080,
    ratio: '16:9'
  },
  {
    width: 1920,
    height: 1200,
    ratio: '16:10'
  },
  {
    width: 1200,
    height: 1200,
    ratio: '1:1'
  },
  {
    width: 1200,
    height: 1920,
    ratio: '9:16'
  },
  {
    width: 1080,
    height: 1920,
    ratio: '10:16'
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      sizeIndex: 0,
      modeIndex: 0
    }
  }
  onSizeChange(e) {
    this.setState({
      sizeIndex: e.target.value
    })
  }
  onModeChange(e) {
    this.setState({
      modeIndex: e.target.value
    })
  }
  onResize() {
    console.log('onResize')
    const node = this.myRef.current
    const { sizeIndex, modeIndex } = this.state
    const size = SIZE_LIST[sizeIndex]
    const mode = MODE_LIST[modeIndex]
    transformScreen(node, size.width, size.height, mode.value)
  }
  render() {
    const { sizeIndex, modeIndex } = this.state
    return (
      <div className="App">
        <main className="App-main" ref={this.myRef}>
          <div className="App-item">top left</div>
          <div className="App-item">top center</div>
          <div className="App-item">top right</div>
          <div className="App-item">center left</div>
          <div className="App-item">center center</div>
          <div className="App-item">center right</div>
          <div className="App-item">bottom left</div>
          <div className="App-item">bottom center</div>
          <div className="App-item">bottom right</div>
        </main>
        <div className="App-option">
          <label htmlFor="size">size: </label>
          <select
            name="size"
            value={sizeIndex}
            onChange={this.onSizeChange.bind(this)}
          >
            {SIZE_LIST.map((size, index) => {
              return (
                <option value={index} key={index}>
                  {size.width}*{size.height} ({size.ratio})
                </option>
              )
            })}
          </select>
          <label htmlFor="mode">mode: </label>
          <select
            name="mode"
            value={modeIndex}
            onChange={this.onModeChange.bind(this)}
          >
            {MODE_LIST.map((mode, index) => {
              return (
                <option value={index} key={index}>
                  {mode.value}
                </option>
              )
            })}
          </select>
          <div>{MODE_LIST[modeIndex].text}</div>
        </div>
      </div>
    )
  }
  componentDidUpdate() {
    this.onResize()
  }
  componentDidMount() {
    this.onResize()
    let timer = null
    window.addEventListener('resize', () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        this.onResize()
      }, 100)
    })
  }
}

export default App
