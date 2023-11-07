import { Header } from './Header.jsx'
import { BorderItem } from './BorderItem.jsx'
import { UseFetchdata } from './UseFetchdata.js'
import { Link, useLocation } from 'react-router-dom'
import style from '../css/components/country.module.css'

export const Country = () => {
    let location = useLocation()
    let nameCountry = location.pathname.slice(1).replaceAll('%20', ' ')

    const { data } = UseFetchdata(`https://restcountries.com/v3.1/name/${nameCountry}`, nameCountry)

    return (
        <>
            <Header />

            {data.map((itemCountry, index) => {

                return (
                    <section className={style.containerCountry} key={index}>
                        <Link to={'/'}>
                            <section className={style.back}>
                                <img src="./src/assets/images/arrow-back.svg" />
                                <p>Back</p>
                            </section>
                        </Link>

                        <section className={style.flag}>
                            <section className={style.flagImg}>
                                {data && <img src={itemCountry.flags.svg} alt={itemCountry.flags.alt} />}
                            </section>

                            <section className={style.infoCountry}>
                                <h3>{nameCountry}</h3>

                                <section className={style.description}>
                                    <div className={style.colum1}>
                                        <p>Native Name: <span>{ itemCountry.name.common }</span></p>
                                        <p>Population: <span>{itemCountry.population}</span></p>
                                        <p>Region: <span>{itemCountry.region}</span></p>
                                        <p>Sub Region: <span>{itemCountry.subregion}</span></p>
                                        <p>Capital: <span>{itemCountry.capital[0]}</span></p>
                                    </div>

                                    <div className={style.colum2}>
                                        <p>Top Level Domain: <span>{itemCountry.tld}</span></p>
                                        <p>Currencies: <span>{Object.keys(itemCountry.currencies).join()}</span></p>
                                        <p>Languajes: <span>{Object.values(itemCountry.languages).join()}</span></p>
                                    </div>
                                </section>

                                <section className={style.border}>
                                    <p>Border Countries:</p>
                                    {
                                    itemCountry.borders ? itemCountry.borders.map(border => {
                                        return <BorderItem border={border} key={border} />
                                    }) : <span>Not bordes</span>
                                    }
                                </section>
                            </section>

                        </section>
                    </section>
                )
            })}

        </>
    )
}
