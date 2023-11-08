<script>
    import '../style.css'
</script>

<a class="skipToContent" href="#main-content"> Skip to content</a>

<header> 
    <a href="/"> <h1> Cats </h1> </a>
</header>

<main>
    <slot />
</main>

<footer> footer </footer>

<style> 

.skipToContent {
		min-height: 2rem;
		padding: 0.8rem;	
		margin-left: 8px;
		z-index: 200;	
		position: absolute;
		transform: translateY(-100px);
		transition: all .3s;
		background-color: var(--secondarycolor) ;
		font-family: var(--basefont);
	}

	.skipToContent:focus {
		transform: translateY(0px); 
		opacity: 100;
	}

    header{
		background-color: white;
		padding: clamp(0.5rem, 2vw, 2rem);
		border-bottom: 1px solid lightgrey;
  		text-align: center;
		flex: 0 1 auto; 
		position: sticky;
		top: 0;
		z-index: 2;
	}

    footer {
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
		gap: var(--recipieGap);
		justify-content: center;
		align-items: center;
		background-color: var(--secondarycolor);
		padding: 2rem;
        background-color: white;
	}
</style>