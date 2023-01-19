<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <img src="../assets/logo.png" class="img-fluid mx-auto d-block" alt="...">

        <div id="carouselExampleDark" class="carousel slide container-md" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active ">
                    <img src="../assets/jjang.png" class="d-block w-75 h-100 mx-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/jjang2.png" class="d-block w-75 h-100 mx-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/jjang.png" class="d-block w-75 h-100 mx-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <footer class="py-5 mt-auto">
            footer Text
        </footer>
    </div>
    
</template>

<script>
export default {

}
</script>