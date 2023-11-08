<script>
    const url = "http://localhost:5173/cats/abys";
    const slug = url.split("/").pop(); // This will be 'abys'

    export let data;
    const { cats } = data

</script>


<main>
    
        <img src="{cats.image?.url}" alt="">
        <h2>{cats.name} </h2>

        <div class="info">
            <p> Origin: {cats.origin}</p>
            <p> Lifespan: {cats.life_span}</p>
            <p> Temprament: {cats.temperament}</p>

        </div>

        <p> {cats.description}</p>
        
 

</main>

<style>
    main{
        max-width: 600px;
        margin: auto;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    img{
        width: 100%;
        height: clamp(200px, 60vw, 800px);
        object-fit: cover;
    }
    .info{
        width: 100%;
    }

</style>