import { useState, useEffect } from 'react'
import style from '../css/components/header.module.css'

export const Header = () => {

    const [theme, setTheme] = useState('light')

    const onHandle = () => {
        theme == 'dark' ? setTheme('ligth') : setTheme('dark')
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <>
            <section className={style.header}>
                <h1>Where in the world?</h1>
                <section
                    className={style.mode}
                    onClick={onHandle}
                >
                    <img src="./src/assets/images/dark-mode.svg" />
                    <p>Dark Mode</p>
                </section>
            </section>
        </>
    )
}
