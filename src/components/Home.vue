<script setup>
    import { useCollection, useFirestore } from 'vuefire'
    import { collection } from 'firebase/firestore'
    const db = useFirestore()
    const ropas = useCollection(collection(db, 'ropa'))
</script>

<template>
    <div class="sloganDiv">
        <img src="../../public/slogan.png" alt="slogan" class="slogan">
        <!-- carrusel -->
        <div class="divCarrusel">
            <ul class="ulCarrusel">
                <li v-for="ropa in ropas" :key="ropa.id">
                    <div class="divImgCarrusel">
                        <img :src="ropa.image" :alt="ropa.tittle" class="carruselImg">
                    </div>
                </li>
                <button class="btnIzqCarrusel"></button>
                <button class="buttonDerCarrusel">></button>
            </ul>
        </div>
        
        <div class="divCorreo">
            <h2>Recibir noticias de productos al correo electrónico</h2>
            <p>
                Si deseas recibir noticias de descuentos de ropa o promociones no olvides subscribirte
                a las noticias que enviamos por correo electrónico cada semana, solo necesitas poner tu correo
                a continuación y serás notificado por cada descuento de la página
            </p>
            <input type="text" placeholder="Correo electrónico aquí" id="inputCorreo">
            <button id="buttonCorreo">Subscribirse</button>
        </div>
    </div>
</template>