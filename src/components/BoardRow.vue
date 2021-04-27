<template>
  <tr class="row" :class="thickBottomBorder && 'thick-bottom-border'">
    <th class="board-col">{{ description }}</th>
    <td class="board-col"></td>
    <td class="board-col"></td>
    <td class="board-col"></td>
  </tr>
</template>

<script>
export default {
name: "BoardRow",
  props: {
    description: String,
    columns: Number,
    thickBottomBorder: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style scoped>

.board-col {
  min-width: 30px;
  /*border: 1px solid black;*/
  /*background-color: #57ff40;*/
}

.board-row {
  border: 1px solid black;
}

.thick-bottom-border {
  border-bottom-width: 2px !important;
}

.board-table td {
  /*border: 1px solid black;*/
  border-left: 1px solid black;
}

</style>