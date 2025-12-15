
// Outer loop: iterate 0..9 (10 rows total)
// Variable 'row' represents the current row index
for (let row = 0; row <= 9; row++) {

    // Inner loop: iterate 0..9 (10 columns total)
    // Variable 'col' represents the current column index
    for (let col = 0; col <= 9; col++) {
        // For each row/column pair, print coordinates in format (row.column)
        // process.stdout.write() prints without an automatic newline
        process.stdout.write("(" + row + "." + col + ")");
    }

    // After finishing all columns of a row, add a newline
    // so the next row starts on a new line
    process.stdout.write("\n");
}

// Final result: a 10x10 grid with coordinates
// from (0.0) to (9.9), arranged in 10 rows and 10 columns




