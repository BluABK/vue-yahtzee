<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Settings />
    <div class="board-container">
      <div class="player-adder-container">
        <div class="player-adder" @click="addPlayer()">
          <span class="player-adder-text">+</span>
          <img class="player-adder-img" src="../assets/person.png" alt="Add Player (CPU)" />
          <div style="clear: left;"/>
        </div>
        <div class="player-adder" @click="addPlayer('CPU', false)">
          <span class="player-adder-text">+</span>
          <img class="player-adder-img" src="../assets/cpu.svg" alt="Add Player (CPU)" />
          <div style="clear: left;"/>
        </div>
      </div>

      <div class="board-spacer"></div>

      <table class="board-table paper stacked">
        <thead>
          <board-row :rowNumber="0" description="Players" :players="players" :thickBottomBorder="true" :darkerBgColor="true" :boldFont="true"></board-row>
        </thead>
        <tbody>
          <board-row :rowNumber="1" description="Ones" :players="players"></board-row>
          <board-row :rowNumber="2" description="Twoes" :players="players"></board-row>
          <board-row :rowNumber="3" description="Threes" :players="players"></board-row>
          <board-row :rowNumber="4" description="Fours" :players="players"></board-row>
          <board-row :rowNumber="5" description="Fives" :players="players"></board-row>
          <board-row :rowNumber="6" description="Sixes" :players="players" :thickBottomBorder="true"></board-row>

          <board-row :rowNumber="7" description="Sum" :players="players" :darkerBgColor="true" :boldFont="true"></board-row>
          <board-row :rowNumber="8" description="Bonus" :players="players" :darkerBgColor="true" :boldFont="true"></board-row>
          <board-row :rowNumber="9" description="1 pair" :players="players"></board-row>
          <board-row :rowNumber="10" description="2 pairs" :players="players"></board-row>
          <board-row :rowNumber="11" description="3 equal" :players="players"></board-row>
          <board-row :rowNumber="12" description="4 equal" :players="players"></board-row>
          <board-row :rowNumber="13" description="Small straight" :players="players"></board-row>
          <board-row :rowNumber="14" description="Big straight" :players="players"></board-row>
          <board-row :rowNumber="15" description="House" :players="players"></board-row>
          <board-row :rowNumber="16" description="Chance" :players="players"></board-row>
          <board-row :rowNumber="17" description="Yatzy" :players="players" :thickBottomBorder="true"></board-row>

          <board-row :rowNumber="18" description="Sumtotal" :players="players" :darkerBgColor="true" :boldFont="true"></board-row>
        </tbody>
      </table>
    </div>
    <button :disabled="players.length <= 0" name="btn-sim-game-forced" @click="playForcedGame()">Simulate game (forced)</button>
    <button :disabled="players.length <= 0" name="btn-sim-round" @click="rollAllDice()">Roll die</button>
    <br />
    <div class="rolled-dice-container">
      <template v-for="(value, index) in currentlyRolledDice">
        <div v-if="currentlyRolledDice.length > 0" class="die" :key="index" @click="selectCurrentlyRolledDie(index)">
          <img :src="require(`@/assets/dice/dieFace${value}.png`)" :alt="value" :title="value"/>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import {Player} from "../modules/Player.mjs";
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
  created() {
    // Constants (added to Vue object to avoid adding reactive overhead).
    this.SCORE_BOARD_ROWS = 18;
  },
  computed: {
    // assetDice () {
    //   return require(`./assets/dice`)
    // }
  },
  data() {
    return {
      players: [],
      gameRunning: false, // FIXME: Tie to (prevent) player-adding and other..
      currentScoreBoardRow: 0,
      currentPlayer: null,
      currentlyRolledDice: []
    }
  },
  methods: {
    addPlayer(name = "Unnamed", isHuman = true) {
      let player = new Player(name, isHuman);
      this.players.push(player);
      console.log("Added player", player);
    },

    rollDie(min = 1, max = 6) {
      return (min - 1) + Math.ceil(Math.random() * (max - min + 1))
    },

    rollAllDice(diceToRoll = 5) {
      let dice = [];

      for (let i = 0; i < diceToRoll; i++) {
        dice.push(this.rollDie())
      }

      this.currentlyRolledDice = dice;
      console.log("currentlyRolledDice", this.currentlyRolledDice);
    },

    selectCurrentlyRolledDie(diceIndex) {
      console.log(`selectDie`, diceIndex, this.currentlyRolledDice[diceIndex]);

    },

    // playScoreBoardRow(rowNumber) {
    //   for (let player of this.players) {
    //     console.log(player);
    //   }
    // },

    playForcedGame() {
      this.gameRunning = true;

      // For each row in score board.
      for (let i = 0; i < this.SCORE_BOARD_ROWS; i++) {
        console.log(i);
        // this.playScoreBoardRow(i);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Variables
// Board paper-stack box-shadow:
$yellow-paper: rgb(248, 234, 105);
$white-paper: #f1f1f1;
$paper-width: 15rem;
$paper-height: 19rem;
$transition-time: 0.4s;
$number-of-middle-folded-parts: 4;
$fold-part-height: $paper-height / 4;

// Add CPU element:
$player-adder-height: 25px;
$player-adder-width: $player-adder-height;

// Mixins
@mixin stacked-shadow($through, $even-color, $odd-color) {
  $shadow : "";
  @for $i from 1 through $through {
    @if ($i % 2 == 0) {
      $shadow : $shadow + "#{$i/2}px #{$i/2}px 0 0 #{$even-color}";
    }
    @else {
      $shadow : $shadow + "#{$i/2}px #{$i/2}px 0 0 #{$odd-color}";
    }
    $shadow : $shadow + if($i != $through, ", ", "");
  }

  box-shadow: unquote($shadow);
}

.stacked {
  @include stacked-shadow($through: 30, $even-color: rgb(219, 219, 219), $odd-color: rgb(0, 0, 0));
}

/* NB: False-positive "unused" warning, this selector is very much in use. */
.darken * {
  background-color: forestgreen;
  backdrop-filter: invert(50%) sepia(1%) saturate(3207%) hue-rotate(75deg) brightness(100%) contrast(100%);
}

.board-container {
  display: inline-block;
  position: absolute;
  left: 0;
}

.board-spacer {
  width: 20px;
  float: left;
}

.player-adder-container {
  float: left;
}

.board-table {
  float: right;
  empty-cells: show;
  border-collapse: collapse;
}

.board-table thead {
  //font-weight: bold;
}

.board-table tbody {
  font-weight: normal;
}

.board-table tr {
  border: 1px solid;
}

.board-table td {
  font-family: cursive;
}

.board-table:nth-child(1) {
  text-align: left;
}

.player-adder {
  display: inline-block;
}

.player-adder:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.25);
}

.player-adder-text {
  color: forestgreen;
  font-size: $player-adder-height;
  line-height: $player-adder-height;
  float: left;
}

.player-adder-img {
  height: $player-adder-height;
  width: $player-adder-height;
  float: right;
}

.rolled-dice-container {
  display: inline-block;
  //min-width: 300px;
  //min-height: 300px;
  //background-color: steelblue;
}

.die {
  float: left;
  padding: 5px;
}

.die:hover {
  cursor: pointer;
  filter: invert(10%) sepia(1%) saturate(3207%) hue-rotate(175deg) brightness(100%) contrast(100%);
}

.selected-die {
  filter: invert(20%) sepia(1%) saturate(3207%) hue-rotate(175deg) brightness(100%) contrast(100%);
}

.die>img {
  height: 50px;
  width: 50px;
}
</style>

