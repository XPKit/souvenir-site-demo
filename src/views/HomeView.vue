<script>
import Banner from '../components/landing/Banner.vue';
import Description from '../components/landing/Description.vue';
import Location from '../components/landing/Location.vue';
import Collect from '../components/landing/Collect.vue';

export default {
    name: 'HomeView',
    components: {
        Banner,
        Description,
        Location,
        Collect
    }
}
</script>

<template>
    <Banner />
    <Description />
    <Location />
    <Collect />
</template>