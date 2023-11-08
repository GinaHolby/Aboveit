export const load = async ({fetch}) => {
    

    const catUrl = await fetch('https://api.thecatapi.com/v1/breeds?limit=100&page=0&api_key=live_HQ2p2jHlCzLlVWK1G8ZjfFbqZWzBHewj6VhHfrDpdx5DLCVO58PCKRFrq8kYJLdZ')
    const cats = await catUrl.json()
    console.log(cats)

    return {
        cats: cats
    }
}



/* rblu */