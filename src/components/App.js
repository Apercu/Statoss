import React, { Component } from 'react'

if (process.env.BROWSER) {
  require('styles/main.scss')
  require('react-select/dist/react-select.css')
}

class App extends Component {

  render () {
    return (
      <div className='container'>

        <section>
          {this.props.children}
        </section>

        <footer>
          <div className='credits'>
            {'Made with '}
            <strong>{'vim'}</strong>
            {' by '}
            <a href='https://github.com/SIGSEV' target='_blank'>
              {'SIGSEV'}
            </a>
          </div>
        </footer>

      </div>
    )
  }

}

export default App
