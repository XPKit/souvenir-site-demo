<script>

export default {
    name: 'SouvenirsView',
    data() {
        return {
            userIdValue: '',
            loading: true,
            souvenirs: []
        }
    },
    methods: {
        checkLogin() {
            if (!window.sessionStorage.getItem('user_id')) {
                return this.$router.push({ name: 'login' });
            }
            this.userIdValue = window.sessionStorage.getItem('user_id');
        },

        async fetchSouvenirs() {
            const catalogueEndpoint = `https://catalogue.${this.appSettings.xpkit.region}/api/catalogue/`;

            let requestData = {
                'experience_id': this.appSettings.xpkit.experience_id,
                'account_id': this.appSettings.xpkit.account_id,
                'profile_key_and_value': {
                    [this.appSettings.xpkit.user_identifier]: this.userIdValue
                }
            };

            // For demo purposes only (remove this conditional)...
            if (this.userIdValue === 'example@example.com') {
                const response = await fetch('/json/example.json', {
                    method: 'GET',
                });
                const data = await response.json();
                this.souvenirs = data['resource']['results'];
            } else {
                const response = await fetch(catalogueEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestData)
                });
                const data = await response.json();
                this.souvenirs = data['resource']['results'];
            }
        },
    },
    async mounted() {
        this.checkLogin();
        await this.fetchSouvenirs();
        this.loading = false;
    }
}
</script>

<template>
    <section>
        <div class="container text-center">
            <div v-if="!loading">
                <div class="row center">
                    <div class="col-mob-12">
                        <h1 class="title">Thanks for visiting!</h1>
                        <p class="content">Find your memories from the event below</p>
                    </div>
                </div>

                <div class="row center">
                    <div class="col-mob-12"  v-if="souvenirs.length === 0">
                        <p class="content">We couldn't find any souvenirs.</p>
                    </div>

                    <div class="col-mob-12 col-lg-6 souvenir-item" v-for="souvenir in souvenirs">
                        <div class="souvenir-item-wrapper">
                            <div class="souvenir-link" v-if="souvenir.resource.type === 'video'">
                                <a :href="souvenir.resource.url" :title="souvenir.resource.name" target="_blank">
                                    <video class="souvenir-item-asset" :src="souvenir.resource.url"></video>

                                    <div class="play-icon"></div>
                                </a>
                            </div>
                            <div class="souvenir-link" v-if="souvenir.resource.type === 'image'">
                                <a :href="souvenir.resource.url" :title="souvenir.resource.name" target="_blank"><img class="souvenir-item-asset" :src="souvenir.resource.url" /></a>
                            </div>
                            <span class="souvenir-name" v-if="['image', 'video'].includes(souvenir.resource.type)">{{ souvenir.resource.name }}</span>

                            <a v-if="['audio', 'document'].includes(souvenir.resource.type)" class="souvenir-link" target="_blank" :href="souvenir.resource.url">
                                <img class="souvenir-item-asset document" src="/images/document-image.jpg" />
                                <div class="souvenir-item-document">
                                    <h3 class="souvenir-item-document-title">{{ souvenir.resource.name }}</h3>
                                    <p class="souvenir-item-document-description">{{ souvenir.resource.description }}</p>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div class="row loading" v-if="loading">
                <div class="col-mob-12">
                    <img src="/images/loading.svg" width="100" alt="Loading icon">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.no-padding {
    padding-top: 0;
}
.loading img {
    margin: 0 auto;
}

section {

    margin-bottom: 50px;
    .header-padding {
        padding-top: 6rem;
    }
    .loading-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        text-align: center;
        width: 100%;
        margin-bottom: 5rem;
        .loading {
            width: 5rem;
        }
    }
    .souvenir-name {
        opacity: 0;
        position: absolute;
        left: 0;
        bottom: -1rem;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        margin: 0;
        padding: 0.5rem;
        color: white;
        text-align: center;
        transition: 0.25s opacity ease, 0.5s bottom ease;
    }
    .souvenir-item {
        margin: 1rem 0;
        .souvenir-item-wrapper {
            width: 100%;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            &:hover {
                .souvenir-name {
                    opacity: 1;
                    bottom: 0;
                }
                .souvenir-item-asset {
                    transform: scale(1.15);
                    filter: grayscale(0);
                }
            }
        }
    }
    .souvenir-item-asset {
        width: 100%;
        display: block;
        transition: transform 0.5s ease, filter 0.5s ease;
        filter: grayscale(0.25);
        &.document {
            filter: grayscale(0.25) brightness(50%);
        }
    }
    .play-icon {
        position: absolute;
        left: 37.5%;
        top: 0;
        width: 25%;
        height: 100%;
        background-image: url('/images/icon-play.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .souvenir-link {
        display: block;
        width: 100%;
        height: 100%;
    }
    .souvenir-item-document {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 5%;
        .souvenir-item-document-title {
            margin: 0 0 0.25rem;
            color: #ffffff;
        }
        .souvenir-item-document-description {
            margin: 0;
            color: #ffffff;
        }
    }
}
</style>