<script setup></script>

<template>
    <header>
        <router-link to="/" id="router-link">
            <div id="headerLeft">
                <img src="../../public/logo.png" alt="Logo" id="logoHeader">
                <h1>Tu mejor tienda de ropa</h1>
            </div>
        </router-link>
        <div id="headerRigth">
            <a href="#" id="btnLogin">Login</a>
            <img src="../../public/carro.png" alt="carro" id="carroHeader">
            <div id="displayCart"></div>
        </div>
    </header>
</template>