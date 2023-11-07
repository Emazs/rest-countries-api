import { useState } from "react";

export const Search = (data, q, stateRegion) => {
    const [searchParam] = useState(['name']);

    const filterRegion = data.filter(item => {
        let region = stateRegion.toLowerCase();

        if(stateRegion == 'Ninguna') return data

        if (item.region.toLowerCase() == region) {
            return item
        }
    })


    return filterRegion.filter(item => {
        let items = item[searchParam].common.toString().toLowerCase()

        if (items.indexOf(q.toLowerCase()) > -1) {
            return item
        }
    })
}
