<template>
    <div id="question">
        <div id="span-question">
            <span><b>{{question.question}}</b></span>
        </div>
        <div id="input-response">
            <div v-for="(choix,index) in question.choix" :key="index">
                <b-form-radio v-model="choice" name="radio" :value="choix">{{choix}}</b-form-radio>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Question",
        props: {
            question: Object
        },
        data() {
            return {
                choice: ''
            }
        },
        watch: {
            choice() {
                this.$emit('choice', this.choice)
            }
        }
    }
</script>

<style scoped>

    #question {
        height: 80%;
        display: grid;
        grid-template-columns: 20% 60% 20%;
        grid-template-rows: 20% 20% 20% 20% 20%;
    }
    #span-question {
        grid-column: 2;
        grid-row: 2;
        font-size: 20px;
        text-align: center;
    }
    #input-response {
        grid-column: 2;
        grid-row: 3;
        text-align: center;
    }

</style>