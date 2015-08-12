(function () {
  var container = document.querySelector(".first-table .container");


  $.browser = {
    ie: false,
    opera: false
  };

  $.curCSS = $.css;



  $(".splitter-container").splitter({
    type: "h",
    sizeTop: true,
    accessKey: "P"
  });

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
  $("a[data-toggle=tab]").on("shown.bs.tab", function () {
    firstTable.render();
    secondTable.render();
    setTimeout(function () {
      firstTable.render();
      secondTable.render();
    },100);

  });

  setTimeout(function () {
    $(".margin-calculations").on('mouseup', ".hsplitbar", function () {
      firstTable.render();
      secondTable.render();
    });
  },100);

}());
