import React from 'react'

function LanguagesNav ({ selected, onUpdateLanguage }){
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <ul className='flex-center'>
      {languages.map((language) => (
        <li key={language}>
          <button className='btn-clear nav-link'
          style={language === selected ? {color: 'rgb(187, 46, 31)'} : null}
          onClick={()=> onUpdateLanguage(language)}>
            {language}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default class Popular extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All'
    }

    // Ensures that the 'this' context is always that of Popular - not where this is used in a function (for example)
    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage(selectedLanguage){
    // Always use setState here - setState lets React know we have changed state and cause re render
    this.setState({
      selectedLanguage
    })
  }

  render(){
    const { selectedLanguage } = this.state
    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
      </React.Fragment>
    )
  }
}

// Using ()=> Arrow function, it gives react a 'pointer' to the function, so whenever clicked invoke this function
