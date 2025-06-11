<!-- SCRIPT ---------------------------------------------------------------------------------------------------------------->

<script>

</script>

<!-- TEMPLATE -------------------------------------------------------------------------------------------------------------->

<template>
    <nav class="navbar fondoNegroEstandar sombreado fixed-top p-3">
        <div class="container-fluid d-flex justify-content-between">

            <div style="width: 20%;">
                <img src="https://acortar.link/lPGxEV" style="width:250px;" alt="Logo Pokédex">
            </div>

            <div style="width: 35%;">
                <form class="d-flex">
                    <input type="text" class="form-control input w-100 rounded-5 border-0 py-2 px-3" placeholder="Introduce nombre o número">
                    <button type="submit" class="btn btn-primary fondoRojo rounded-5 ms-1 border-0"><i class="bi bi-search"></i></button>
                </form>
            </div>

            <div class="d-flex justify-content-around" style="width: 45%;">
                <div>
                    <h5 class="pt-3">
                        <router-link to="/pokemon" class="mb-0 tipografia text-decoration-none text-light" active-class="active">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" class="rounded-circle border-0 me-2 mb-1 bg-white" viewBox="0 0 24 24" width="30">
                                <path id="rellenoPokeball" d="m12 2a10 10 0 0 1 10 10 10 10 0 0 1 -10 10 10 10 0 0 1 -10-10 10 10 0 0 1 10-10m0 2c-4.08 0-7.45 3.05-7.94 7h4.07c.44-1.73 2.01-3 3.87-3s3.43 1.27 3.87 3h4.07c-.49-3.95-3.86-7-7.94-7m0 16c4.08 0 7.45-3.05 7.94-7h-4.07c-.44 1.73-2.01 3-3.87 3s-3.43-1.27-3.87-3h-4.07c.49 3.95 3.86 7 7.94 7m0-10a2 2 0 0 0 -2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 -2-2z"/>
                            </svg>Pokémon
                        </router-link>
                    </h5>
                </div>
                <div>
                    <h5 class="pt-3">
                        <router-link to="/item" class="mb-0 tipografia text-decoration-none text-light" active-class="active">
                            <!--i class="bi bi-backpack2-fill"</i-->&nbsp;&nbsp;Items
                        </router-link>
                    </h5>
                </div>
                <div>
                    <h5 class="pt-3">
                        <!--router-link to="/game" class="mb-0 tipografia text-decoration-none text-light" active-class="active"-->
                            <i class="bi bi-dpad-fill"></i>&nbsp;&nbsp;Videojuegos
                        <!--/router-link-->
                    </h5>
                </div>
            </div>

        </div>
    </nav>
</template>

<!-- STYLE ----------------------------------------------------------------------------------------------------------------->

<style scoped>
@font-face {
    font-family: 'jockeyOne';
    src: url('../assets/fonts/JockeyOne-Regular.ttf');
}

.tipografia{
    font-family: 'jockeyOne';
}

.sombreado{
    box-shadow: 0px 0px 10px black;
}

.fondoNegroEstandar{
    background-color: #313030 !important;
}

.fondoRojo{
    background-color: #CA0000 !important;
}

a:hover{
    color:#f70202 !important;
}

a:hover>svg{
    background-color: #f70202 !important;
}

/*Color de relleno para el icono de la Pokéball*/
#rellenoPokeball{
    fill: #313030;
}
</style>