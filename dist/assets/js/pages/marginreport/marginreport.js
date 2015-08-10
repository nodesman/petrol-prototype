(function () {
  var container = document.querySelector(".first-table .container");
  var firstTable = new Handsontable(container, {
    data: marginDistributionData,
    stretchH: 'all',
    mergeCells: [
      {row: 0, col: 1, rowspan: 1, colspan: 5}
    ],
    colHeaders: false,
    contextMenu: false,
    fixedRowsTop: 2,
    afterInit: function () {
      this.render();
    }
  });

  var secondContainer = document.querySelector(".second-table .container");

  var secondTable = new Handsontable(secondContainer, {
    data: sitemargins,
    minSpareRows: 1,
    stretchH: 'all',
    colHeaders: false,
    contextMenu: false,
    fixedRowsTop: 1
  });
}());
