<script>
    export let data;
    const { cats } = data
    console.log(cats);
    import Card from '../lib/components/Card.svelte';
</script>

<main id="main-content">

   
<div class="cardContainer">

    {#each cats as cat}

        <a href="/cats/{cat.id}">
            <Card imageUrl = {cat.image?.url} catName = {cat.name}>
            
            </Card>
        </a>
    
    {/each}

</div>
   
</main>

<style>

    .cardContainer{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
    }
   

</style>