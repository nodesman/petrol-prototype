(function () {
  var container = document.querySelector(".first-table .container");
  var firstTable = new Handsontable(container, {
    data: marginDistributionData,
    stretchH: 'all',
    mergeCells: [
      {row: 0, col: 1, rowspan: 1, colspan: 5},
      {row: 0, col: 6, rowspan: 1, colspan: 5},
      {row: 0, col: 11, rowspan: 1, colspan: 5},
      {row: 0, col: 16, rowspan: 1, colspan: 5}
    ],
    colHeaders: false,
    contextMenu: false,
    fixedRowsTop: 2,
    fixedColumnsLeft: 1,
    afterInit: function () {
      this.render();
    }
  });

  $.browser = {
    ie: false,
    opera: false
  };

  $.curCSS = $.css;

  var secondContainer = document.querySelector(".second-table .container");
  var secondTable = new Handsontable(secondContainer, {
    data: sitemargins,
    minSpareRows: 1,
    stretchH: 'all',
    colHeaders: false,
    contextMenu: false,
    fixedRowsTop: 1,
    fixedColumnsLeft: 1
  });

  $(".splitter-container").splitter({
    type: "h",
    sizeTop: true,
    accessKey: "P"
  });

  setTimeout(function () {
    $(".margin-calculations").on('mouseup', ".hsplitbar", function () {
      firstTable.render();
      secondTable.render();
    });
  },100);

}());
