<script setup>
    import { useCollection, useFirestore } from 'vuefire'
    import { collection } from 'firebase/firestore'
    const db = useFirestore()
    const todos = useCollection(collection(db, 'hombre'))
    console.log(todos)
</script>

<template>
    <div class="sloganDiv">
        <img src="../../public/slogan.png" alt="slogan" class="slogan">
        <!-- carrusel -->
        <ul>
            <li v-for="todo in todos" :key="todo.id">
            {{ todo.title }}
            </li>
        </ul>
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