//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

var deleteDuplicates = function(head) {
    let prev = head
    let curr = head

    while (curr) {
        
        if (curr.next === null && prev.val === curr.val) {
            prev.next = null
        }

        if (curr.val === prev.val) {
            //skip and move to next node
            curr = curr.next
        } else {
            //directly point prev node to new node
            prev.next = curr

            //make current node new prev
            prev = curr

            //make next node new curr node
            curr = curr.next
        }
    }

    return head
};