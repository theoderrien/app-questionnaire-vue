<template>
  <div id="questionnaire">
    <h3>Bienvenue {{prenom}} {{nom}}</h3>
    <div id="question-component">
      <span v-if="error" class="error">Veuillez sélectionner une réponse !</span>
      <question :question="questions[counter]" @choice="choice=$event"></question>
      <b-button v-if="canNextQuestion" block variant="primary" class="connectButton" @click="nextQuestion">
        <b>Question suivante</b>
      </b-button>
      <b-button v-else block variant="outline-primary" class="connectButton" @click="testFinish">
        <b>Terminer</b>
      </b-button>
    </div>
  </div>
</template>

<script>
  import questionsJSON from '../assets/questions.json'
  import Question from "../components/Question";
  export default {
    name: "Questionnaire",
    components: {
      Question
    },
    data() {
      return {
        nom: this.$route.query.nom,
        prenom: this.$route.query.prenom,
        nomSociete: this.$route.query.nomSociete,
        questions: questionsJSON.questions,
        counter: 0,
        canNextQuestion: true,
        choice: "",
        results: [],
        first: true,
        score: 0,
        error: false
      }
    },
    created() {
      this.nextQuestion()
    },
    methods: {
      nextQuestion() {
        if (this.choice !== "" || this.first) {
          this.error = false
          if (this.first) {
            this.first = false
          } else {
            let res = {
              'question': this.questions[this.counter],
              'choice': this.choice
            }
            this.results.push(res)
            this.isGoodAnswer()
            this.counter++
          }
          if (!this.questions[this.counter + 1]) {
            this.canNextQuestion = false
          }
          this.choice = ""
        } else {
          this.error = true
        }
      },
      testFinish() {
        if (this.choice !== "") {
          this.error = false
          let res = {
            'question': this.questions[this.counter],
            'choice': this.choice
          }
          this.results.push(res)
          this.isGoodAnswer()
          this.$router.push({
            path: 'resultats',
            query: {
              results: this.results,
              nom: this.nom,
              prenom: this.prenom,
              societe: this.nomSociete,
              score: this.score
            }
          })
        } else {
          this.error = true
        }
      },
      isGoodAnswer() {
        if (this.questions[this.counter].reponse === this.choice) {
          this.score++
        }
      }
    }
  }
</script>

<style>
  #questionnaire {
    height: 100%;
    display: grid;
    grid-template-columns: 15% 35% 35% 15%;
    grid-template-rows: 15% 35% 35% 15%;
    background-color: rgb(255, 255, 255);
  }
  h3 {
    grid-row: 1/2;
    grid-column: 1/4;
    font-family: sans-serif;
    font-size: 20px;
    text-align: right
  }
  #question-component {
    background-color: white;
    border-radius: 20px;
    grid-row: 2/4;
    grid-column: 2/4;
  }
  .connectButton {
    height: 10%;
    border-radius:30px;
  }
  .error {
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
    color: red;
  }


</style>