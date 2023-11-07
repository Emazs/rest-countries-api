import './App.css'
import { Header } from './components/Header.jsx'
import { Card } from './components/Card.jsx'
import { useState } from 'react'
import { UseFetchdata } from './components/UseFetchdata.js'
import { Search } from './components/Search.js'

function App() {

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Ninguna']

  const [stateOptions, setstateOptions] = useState('desactivate')
  const [stateRotate, setStateRotate] = useState('norotate')
  const [stateRegion, setStateRegion] = useState('Ninguna')

  const { data, loading } = UseFetchdata('https://restcountries.com/v3.1/all')

  const [q, setQ] = useState('')

  const onHandle = () => {
    stateOptions === 'desactivate' ? setstateOptions('activate') : setstateOptions('desactivate')
    stateRotate === 'norotate' ? setStateRotate('rotate') : setStateRotate('norotate')
  }

  const onHandleRegion = (event) => {
    setStateRegion(event.target.outerText)
  }

  return (
    <>
      <Header />

      <section className='containerSearch'>
        <section className='search'>

          <div className='inputSearch'>
            <img src="./src/assets/images/search.svg" />
            <input
              type="text"
              placeholder='search for a country...'
              name='search-text'
              value={q}
              onChange={e => setQ(e.target.value)}
            />
          </div>

        </section>
        <section className='filterCountry' onClick={onHandle}>
          <section className='titleFilter'>
            <p>Filter by Region</p>
            <img src="./src/assets/images/expand-more.svg" className={`${stateRotate}`} />
          </section>
          <section className={`options ${stateOptions}`}>
            {
              regions.map(items => {
                return <p
                  key={items}
                  onClick={onHandleRegion}
                >{items}</p>
              })
            }
          </section>
        </section>
      </section>

      <section className='cards'>
        {loading && <p>Loading...</p>}
        {
          data && Search(data, q, stateRegion).map((item, index) => {
            if (index < 24) {
              return (
                <Card
                  key={item.population}
                  urlImg={item.flags.svg}
                  population={item.population}
                  country={item.name.common}
                  region={item.region}
                  capital={item.capital} />
              )
            }
          })
        }
      </section>
    </>
  )
}

export default App
