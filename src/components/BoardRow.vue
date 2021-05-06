<template>
  <tr class="board-row" :class="rowClassName">
    <th class="board-col" :class="tableCellHeaderClassName">{{ description }}</th>
    <template v-for="player in players">
      <td class="board-col" :class="tableCellDataClassName" :key="player.id">{{ player.list[rowNumber] }}</td>
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
    },
    darkerBgColor: {
      default: false,
      type: Boolean
    },
    boldFont: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    rowClassName() {
      let classes = []

      if (this.thickBottomBorder) classes.push('thick-bottom-border');
      if (this.darkerBgColor) classes.push('darken');

      return classes.join(" ");
    },

    tableCellHeaderClassName() {
      let classes = [];

      if (this.boldFont) classes.push('bold-font');

      return classes.join(" ");
    },

    tableCellDataClassName() {
      let classes = [];

      if (this.boldFont) classes.push('bold-font');

      return classes.join(" ");
    }
  }
}
</script>

<style scoped>
.board-table * {
  background-color: white;
  border-color: #b1b1b1 !important;
}

.board-table th, td {
  font-weight: normal;
}

.board-col {
  min-width: 30px;
}

/* Header Columns (1st column) */
.board-table th {
  padding-right: 10px;
}

/* Player name columns */
.board-table thead>tr>td {
  padding-right: 10px;
  text-align: center;
  border-left: 1px solid;
}

/* Numeric score columns */
.board-table tbody>tr>td {
  border-left: 1px solid;
  font-family: cursive;
  text-align: center;
}

/* NB: False-positive "unused" warning for the following, these selectors are very much in use. */
.thick-bottom-border {
  border-bottom-width: 2px !important;
}

.thick-bottom-border-black {
  border-bottom-color: black !important;
}

.darken * {
  background-color: #f3f3f3;
}

.bold-font {
  font-weight: bold !important;
}
</style>