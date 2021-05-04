<template>
  <tr class="board-row" :class="thickBottomBorder && 'thick-bottom-border'">
    <th class="board-col">{{ description }}</th>
    <template v-for="player in players">
      <td class="board-col" :key="player.id">{{ player.list[rowNumber] }}</td>
    </template>
  </tr>
</template>

<script>
export default {
  name: "BoardRow",
  props: {
    rowNumber: Number,
    description: String,
    players: Array,
    thickBottomBorder: {
      default: false,
      type: Boolean
    }
  },
}
</script>

<style scoped>

.board-col {
  min-width: 30px;
}

.thick-bottom-border {
  border-bottom-width: 2px !important;
}

.board-table td {
  border-left: 1px solid black;
  font-family: cursive;
}
</style>