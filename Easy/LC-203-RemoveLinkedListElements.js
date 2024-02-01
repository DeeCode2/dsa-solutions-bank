//Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

var removeElements = function(head, val) {
    let prev = head
    let curr = head

    while (curr) {

        if (head.val == val) {
            head = head.next
        }

        if (curr.val !== val) {
            prev = curr
            curr = curr.next
        } else {
            curr = curr.next
            prev.next = curr
        }
    }
}