<script setup>
    import { useCollection, useFirestore } from 'vuefire'
    import { collection } from 'firebase/firestore'
    const db = useFirestore()
    const ropas = useCollection(collection(db, 'ropa'))
</script>

<template>
    <div class="products">
        
        <div class="product" v-for="ropa in ropas" :key="ropa.title">
            <router-link to="/producto/id">
                <div class="productImgDiv">
                    <img :src="ropa.image" :alt="ropa.title" class="productImg">
                </div>
                <div class="productInfo">
                    <h3 class="productTitle">{{ropa.title}}</h3>
                    <p class="productPrice">{{ropa.price}}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>