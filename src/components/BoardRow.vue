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

/* NB: False-positive "unused" warning, this selector is very much in use. */
.thick-bottom-border {
  border-bottom-width: 2px !important;
}

/* Header Columns (1st column) */
.board-table th {
  padding-right: 10px;
}

/* Player name columns */
.board-table thead>tr>td {
  padding-right: 10px;
  text-align: center;
  border-left: 1px solid black;
}

/* Numeric score columns */
.board-table tbody>tr>td {
  border-left: 1px solid black;
  font-family: cursive;
  text-align: center;
}
</style>