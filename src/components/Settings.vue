<template>
 <div class="settings">
   <label for="setting-players">Players</label>
   <select name="players" id="setting-players" v-model="selected">
     <option :value="playerAmount" :key="key" v-for="(playerAmount, key) in 16">{{playerAmount}}</option>
   </select>
 </div>
</template>

<script>
export default {
  name: "Settings",
  props: {
    playerAmount: Number,
    players: Array
  },
  data: function() {
    return {
      selected: this.playerAmount
    };
},
  watch: {
    selected: function(val) {
      this.$emit("set-player-amount", val);
    }
  }
}
</script>

<style scoped>

</style>