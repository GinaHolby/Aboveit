<script>
    export let imageUrl
    export let catName
</script>

<div class="card">

    <img src="{imageUrl}" alt="A {catName} cat">
    <div class="information">
        <h2>{catName}</h2>
    </div>
    
</div>

<style>
    .card{
        background-color: var(--cardBackground);
        text-align: center;
        box-shadow: var(--cardShadow);
        border-radius: var(--cardRadius);
        height: 100%;
        display: flex;
        flex-direction: column; 
    }

    img{
        width: 100%;
        border-radius: var(--cardRadius);
        height: clamp(10rem, 15vw, 40rem);
        object-fit: cover;}

</style>