<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Settings :playerAmount="playerAmount" @set-player-amount="playerAmount = $event" />
    <div id="board">
      <table class="board-table">
        <thead>
          <board-row description="Players" :columns="playerAmount" :thickBottomBorder="true"></board-row>
        </thead>
        <tbody>
          <board-row description="Ones" :columns="playerAmount"></board-row>
          <board-row description="Twoes" :columns="playerAmount"></board-row>
          <board-row description="Threes" :columns="playerAmount"></board-row>
          <board-row description="Fours" :columns="playerAmount"></board-row>
          <board-row description="Fives" :columns="playerAmount"></board-row>
          <board-row description="Sixes" :columns="playerAmount" :thickBottomBorder="true"></board-row>

          <board-row description="Sum" :columns="playerAmount"></board-row>
          <board-row description="Bonus" :columns="playerAmount"></board-row>
          <board-row description="1 pair" :columns="playerAmount"></board-row>
          <board-row description="2 pairs" :columns="playerAmount"></board-row>
          <board-row description="3 equal" :columns="playerAmount"></board-row>
          <board-row description="4 equal" :columns="playerAmount"></board-row>
          <board-row description="Small straight" :columns="playerAmount"></board-row>
          <board-row description="Big straight" :columns="playerAmount"></board-row>
          <board-row description="House" :columns="playerAmount"></board-row>
          <board-row description="Chance" :columns="playerAmount"></board-row>
          <board-row description="Yatzy" :columns="playerAmount" :thickBottomBorder="true"></board-row>

          <board-row description="Sumtotal" :columns="playerAmount"></board-row>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Settings from "@/components/Settings";
import BoardRow from "@/components/BoardRow";
export default {
  name: 'VueYahtzee',
  components: {
    Settings,
    BoardRow
  },
  props: {
    msg: String
  },
  data() {
    return {
      playerAmount: 6
    }
  },
  methods: {

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
