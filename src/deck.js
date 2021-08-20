import { shuffle } from "lodash";

export default function initializeDeck() {
    let id = 0;
    const cards = [
        'boat','cloudy','crab', 'rainy',  'football', 'summer', 
    ].reduce((acc, type) => {
        acc.push(
            {
                id: id++,
                type
            }
        )
        acc.push(
            {
                id: id++,
                type
            }
        )
        return acc
    }, [])

    return shuffle(cards)
}
