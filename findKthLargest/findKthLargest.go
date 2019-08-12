package main

type Node struct {
	val  int
	next *Node
}

type PriorityQueue struct {
	limit  int
	length int
	front  *Node
}

func (pq *PriorityQueue) Enqueue(val int) {
	newNode := &Node{val, nil}
	if pq.front == nil {
		pq.front = newNode
		pq.length++
	} else {
		if pq.length == pq.limit {
			replaceNode := pq.front
			var parent *Node
			found := false
			for !found {
				if replaceNode.val <= val {
					if replaceNode.next != nil {
						parent = replaceNode
						replaceNode = replaceNode.next
					} else {
						replaceNode.next = newNode
						pq.front = pq.front.next
						found = true
					}
				} else if replaceNode.val > val {
					if parent != nil {
						newNode.next = replaceNode
						parent.next = newNode
						pq.front = pq.front.next
						found = true
					} else {
						return
					}
				}
			}
		} else if pq.length < pq.limit {
			current := pq.front
			var parent *Node
			found := false
			for !found {
				if current.val < val {
					if current.next != nil {
						parent = current
						current = current.next
					} else {
						afterCurr := current.next
						current.next = newNode
						newNode.next = afterCurr
						if parent != nil {
							parent.next = newNode
						}
						found = true
					}
				} else {
					newNode.next = current
					if parent != nil {
						parent.next = newNode
					} else {
						pq.front = newNode
					}
					found = true
				}
			}
			pq.length++
		}
	}
	return
}

func findKthLargest(nums []int, k int) int {
	pq := &PriorityQueue{k, 0, nil}
	for i := range nums {
		pq.Enqueue(nums[i])
	}
	return pq.front.val
}
