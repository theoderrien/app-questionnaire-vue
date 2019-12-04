<template>
    <div id="connection">
        <b-input-group prepend="Nom" class="mt-3">
            <b-form-input v-model="nom"></b-form-input>
        </b-input-group>
        <b-input-group prepend="Prénom" class="mt-3">
            <b-form-input v-model="prenom"></b-form-input>
        </b-input-group>
        <b-input-group prepend="Société" class="mt-3">
            <b-form-input v-model="nomSociete"></b-form-input>
        </b-input-group>
        <div class="text-center mt-3">
            <b-button variant="outline-primary" style="width: 70%;" name="valid-info" @click="connected">Commencer</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Connexion",
        data() {
            return {
                nom: "",
                prenom: "",
                nomSociete: "",
                showError: false
            }
        },
        methods: {
            connected() {
                if (this.nom.trim() != "" && this.prenom.trim() != "" && this.nomSociete.trim() != "") {
                    this.$router.push({
                        path: 'questionnaire',
                        query: {
                            nom: this.nom,
                            prenom: this.prenom,
                            nomSociete: this.nomSociete
                        },
                        params: {
                            id:0
                        }
                    })
                } else {
                    this.showError = true
                }
            }
        }
    }
</script>

<style scoped>

</style>