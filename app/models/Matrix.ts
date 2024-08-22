import { Coordinates } from "./Coordinates";

export class Matrix {
    rows: number;
    cols: number;
    cells: number[][];

    constructor(rows: number, cols: number, cells: number[][]) {
        this.rows = rows;
        this.cols = cols;
        this.cells = cells;
    }

    get2dDeterminant = () => {
        return this.rows === 2 && this.cols === 2 ?
            (this.cells[0][0] * this.cells[1][1]) - (this.cells[0][1] * this.cells[1][0])
            : null
    }

    get3dDeterminant = () => {
        if (this.rows !== 3 || this.cols !== 3) return null;

        const cells = this.cells;
        var determinant = 0
        const otherIndexes = new Map();

        otherIndexes.set(0, [1, 2]);
        otherIndexes.set(1, [0, 2]);
        otherIndexes.set(2, [0, 1]);

        for (let i = 0; i < 3; i++) {
            const matrix2d = new Matrix(2, 2, [[cells[1][otherIndexes.get(i)[0]], cells[1][otherIndexes.get(i)[1]]], [cells[2][otherIndexes.get(i)[0]], cells[2][otherIndexes.get(i)[1]]]]);
            const determinant2D = matrix2d.get2dDeterminant();

            if (determinant2D !== null) {
                const Adj = determinant2D * cells[0][i];
                const signedAdj = i % 2 === 0 ? Adj : - Adj;
                determinant += signedAdj;
            }
        }
        return determinant;
    }

    getInverse = () => {
        if (this.get3dDeterminant() === 0 || this.get3dDeterminant === null) {
            return null;
        } else {
            const transposedMatrix = new Matrix(3, 3, this.transpose());
            const adjMatrix = new Matrix(3, 3, transposedMatrix.getAdjMatrix());
            return adjMatrix.muliplyWithNumber(this.get3dDeterminant()!);
        }
    }

    muliplyWithNumber = (number: number) => {
        const multipliedMatrix = this.cells;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                multipliedMatrix[i][j] = this.cells[i][j] * number;
            }
        }
        return multipliedMatrix;
    }

    multiplyMatrix = (matrix: Matrix) => {
        if (this.cells.length !== matrix.cells[0].length) return null;

        const multipliedMatrix = new Matrix(3, 3, [[], [], []]);
        const cells = multipliedMatrix.cells;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                cells[i][j] =
                    this.cells[i][0] * matrix.cells[0][j] +
                    this.cells[i][1] * matrix.cells[1][j] +
                    this.cells[i][2] * matrix.cells[2][j]
            }
        }
        return cells;
    }

    multiplyVector = (vector: number[]) => {
        const multipliedMatrix: number[] = [];
        for (var i = 0; i < 3; i++) {
            var cell = 0;
            for (var j = 0; j < 3; j++) {
                cell += this.cells[i][j] * vector[j]
            }
            multipliedMatrix.push(cell); 
        }
   
        
        return multipliedMatrix;
    }

    transpose = () => {
        const old = this.cells;
        const transposedMatrix = new Matrix(3, 3, [[], [], []])

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                transposedMatrix.cells[row][col] = this.cells[col][row];
            }
        }
        return transposedMatrix.cells;
    }

    getAdjMatrix = () => {
        let adjMatrixCells: number[][] = [[], [], []]
        const signedIndexes = [
            ['+', '-', '+'],
            ['-', '+', '-'],
            ['+', '-', '+']]
        const cells = this.cells;
        const otherIndexes = new Map();

        otherIndexes.set(0, [1, 2]);
        otherIndexes.set(1, [0, 2]);
        otherIndexes.set(2, [0, 1]);

        for (let i = 0; i < 3; i++) {

            for (let j = 0; j < 3; j++) {
                const matrix2d = new Matrix(2, 2,
                    [
                        [cells[otherIndexes.get(i)[0]][otherIndexes.get(j)[0]], cells[otherIndexes.get(i)[0]][otherIndexes.get(j)[1]]],
                        [cells[otherIndexes.get(i)[1]][otherIndexes.get(j)[0]], cells[otherIndexes.get(i)[1]][otherIndexes.get(j)[1]]]
                    ]);
                let determinant2D = matrix2d.get2dDeterminant();

                if (determinant2D !== null) {
                    const signedAdj = signedIndexes[i][j] === '+' ? determinant2D : - determinant2D;

                    adjMatrixCells[i][j] = signedAdj;
                }
            }
        }

        return adjMatrixCells;
    }

    static translation = (tx: number, ty: number) => {
        return [
            [1, 0, tx],
            [0, 1, ty],
            [0, 0, 1]
        ];
    }

    static scale = (sx:number, sy:number) => {
        return [
           [ sx, 0, 0],
            [0, sy, 0],
           [ 0, 0, 1],
          ];
    }

    static rotation = (angle:number) => {
        const angleRadians = (angle *  Math.PI) / 180;
        const cosTheta = Math.cos(angleRadians);
        const sinTheta = Math.sin(angleRadians);

        return [
            [cosTheta, sinTheta, 0],
            [-sinTheta, cosTheta, 0],
            [0, 0, 1],
        ];
    }
}