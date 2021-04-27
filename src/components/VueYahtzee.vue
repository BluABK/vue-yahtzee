<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="board">
      <table class="board-table">
        <thead>
          <board-row description="Players" v-bind:columns="8" v-bind:thickBottomBorder="true"></board-row>
        </thead>
        <tbody>
          <board-row description="Ones" v-bind:columns="8"></board-row>
          <board-row description="Twoes" v-bind:columns="8"></board-row>
          <board-row description="Threes" v-bind:columns="8"></board-row>
          <board-row description="Fours" v-bind:columns="8"></board-row>
          <board-row description="Fives" v-bind:columns="8"></board-row>
          <board-row description="Sixes" v-bind:columns="8" v-bind:thickBottomBorder="true"></board-row>

          <board-row description="Sum" v-bind:columns="8"></board-row>
          <board-row description="Bonus" v-bind:columns="8"></board-row>
          <board-row description="1 pair" v-bind:columns="8"></board-row>
          <board-row description="2 pairs" v-bind:columns="8"></board-row>
          <board-row description="3 equal" v-bind:columns="8"></board-row>
          <board-row description="4 equal" v-bind:columns="8"></board-row>
          <board-row description="Small straight" v-bind:columns="8"></board-row>
          <board-row description="Big straight" v-bind:columns="8"></board-row>
          <board-row description="House" v-bind:columns="8"></board-row>
          <board-row description="Chance" v-bind:columns="8"></board-row>
          <board-row description="Yatzy" v-bind:columns="8" v-bind:thickBottomBorder="true"></board-row>

          <board-row description="Sumtotal" v-bind:columns="8"></board-row>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import BoardRow from "@/components/BoardRow";
export default {
  name: 'VueYahtzee',
  components: {BoardRow},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#board {
  /*display: grid;*/
  /*grid-template-columns: auto repeat(8, 40px);*/
  /*grid-template-rows: 40px 40px;*/
  /*border: 1px solid black;*/
}

.board-table {
  empty-cells: show;
  border-collapse: collapse;
  border: 1px solid black;
}

.board-table thead {
  font-weight: bold;
}

.board-table tbody {
  font-weight: normal;
}

.board-table tr {
  border: 1px solid black;
}

.board-table th {
  background-color: yellowgreen;
  border-left: 5px solid black;
}

.board-table td {
  /*border: 1px solid black;*/
  border-left: 5px solid black;
}

.board-table:nth-child(1) {
  text-align: left;
}
</style>
