package main

func countBattleships(board [][]byte) int {
	count := 0

	for i := range board {
		for j := range board[0] {
			if board[i][j] == 'X' && (j+1 == len(board[i]) || board[i][j+1] != 'X') && (i+1 == len(board) || board[i+1][j] != 'X') {
				count++
			}
		}
	}

	return count
}
