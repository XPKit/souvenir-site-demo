<script>

export default {
    name: 'LoginView',
    data() {
        return {
            userIdField: this.appSettings.xpkit.user_identifier,
            userIdValue: '',
            loading: false
        }
    },
    methods: {
        processFormSubmission() {
            if (this.userIdValue) {
                window.sessionStorage.setItem('user_id', this.userIdValue);
                return this.$router.push({ name: 'souvenirs' });
            }
        }
    }
}
</script>

<template>
    <div class="container text-center">
        <div class="row center">
            <div class="col-mob-12">
                <h1 class="title">Welcome!</h1>
                <p class="content">Please log in to access your souvenirs</p>
            </div>
        </div>
        <form name="souvenirform" @submit.prevent>
            <div class="row center">
                <div class="col-mob-12 col-lg-8">
                    <div class="souvenirs-page page">
                        <div class="form-element">
                            <label class="form-field" for="profile">
                                <input type="text" id="profile" name="profile" class="input" required="" v-model="userIdValue">
                                <span class="label" :class="{ 'input-active': userIdValue != '' }">Enter your {{ userIdField }}</span>
                            </label>
                            <span class="example">Use example@example.com for testing purposes.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row center">
                <div class="col-mob-12 col-lg-8">
                    <button class="button" type="submit" @click="processFormSubmission">Login</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>

.example {
    font-size: 60%;
    padding-top: 10px;
}

</style>