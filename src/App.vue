<script setup>
import Footer from './components/FooterComponent.vue'
import Header from './components/HeaderComponent.vue'
import Nav from './components/NavComponent.vue'
</script>

<template>
    <div>
        <Header></Header>
        <Nav></Nav>
        <main>
            <router-view />
        </main>
        <Footer></Footer>
    </div>
</template>