<template>
    <div id="questionnaire">
        <div class="results">
            <div v-for="(res, index) in results" class="resultat" :key="index">
                <div class="question">{{index + 1}} - {{res.question.question}} :</div>&nbsp;
                <span class="reponse">{{res.choice}}</span>&nbsp;&nbsp;&nbsp;
                <span v-if="res.choice !== res.question.reponse" class="lose"> La bonne réponse est "{{res.question.reponse}}"</span>
            </div><br>
            <div class="score">Score {{score}}/{{results.length}}</div>

            <div class="text-center mt-3">
                <b-button variant="outline-primary" style="width: 70%;" name="backHome" @click="backHome()">Retour à l'accueil</b-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Resultats",
        data() {
            return {
                nom: this.$route.query.nom,
                prenom: this.$route.query.prenom,
                societe: this.$route.query.societe,
                results: this.$route.query.results,
                score: this.$route.query.score
            }
        },
        mounted() {
        },
        methods: {
            backHome(){
                this.$router.push({
                    path: '/'
                })
            }
        }
    }
</script>

<style scoped>
    #questionnaire {
        height: 100%;
        display: grid;
        grid-template-columns: 15% 35% 35% 15%;
        grid-template-rows: 15% 25% 20% 25% 15%;
    }
    h3 {
        grid-row: 1/2;
        grid-column: 1/4;
    }
    .results {
        grid-row: 2/5;
        grid-column: 2/4;
        text-align: center;
    }
    .lose {
        grid-row: 3;
        grid-column: 2;
        color: red;
        font-weight: bold;
    }
    .score{
        border: solid black;
        border-width: 1px;
        border-radius: 5px;
        padding: 10px;
        font-weight: bold;
        font-size: large;
        text-align: center;
    }
</style>