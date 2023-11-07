import { Link } from 'react-router-dom'
import style from '../css/components/card.module.css'

export const Card = ({ country, population, region, capital, urlImg }) => {
    return (
        <>
        <Link to={`/${country}`}>
            <section className={style.containerCard}>
                <section className={style.imgCard}>
                    <img src={urlImg} />
                </section>

                <section className={style.infoCard}>
                    <h3>{country}</h3>

                    <p>Population: <span>{population}</span></p>
                    <p>Region: <span>{region}</span></p>
                    <p>Capital: <span>{capital}</span></p>
                </section>
            </section>
        </Link>
        </>
    )
}
