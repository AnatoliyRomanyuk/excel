function genTable(i, j) {
    var myTable = '<TABLE BORDER="1">\n <TBODY>\n';
    for (i = 0; i < k; i++) {
        myTable += '  <TR>\n';
        for (j = 0; j < k; j++) {
            myTable += '    <TD> @ </TD>\n';
        }
        myTable += '  </TR>\n';
    }
    myTable += ' </TBODY>\n</TABLE>\n';
    document.getElementById('container').innerHTML = myTable;
}