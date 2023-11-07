import { Link } from 'react-router-dom'
import style from '../css/components/border.module.css'
import { UseFetchdata } from './UseFetchdata.js'

export const BorderItem = ({ border }) => {

    const { data } = UseFetchdata('https://restcountries.com/v3.1/all')

    return (
        <>
            {
                data.map(item => {
                    if (item.cca3 == border) {
                        return (
                            <Link to={`/${item.name.common}`} key={item.name.common}>
                                <section className={style.containerBorder}>
                                    <p>{item.name.common}</p>
                                </section>
                            </Link>
                        )
                    }
                })
            }
        </>
    )
}
