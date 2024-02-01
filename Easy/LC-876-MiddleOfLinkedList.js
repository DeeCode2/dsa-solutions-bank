//Given the head of a singly linked list, return the middle node of the linked list.
//If there are two middle nodes, return the second middle node.

var middleNode = function (head) {
    let curr1 = head
    let i = 0

    while (curr1) {
        curr1 = curr1.next
        i++
    }

    let curr2 = head
    let j = 0

    if (i % 2 == 0) {
        while (j < i / 2) {
            curr2 = curr2.next
            j++
        }
        
    } else {
        while (j < Math.floor(i/2)) {
            curr2 = curr2.next
            j++
        }
    }

    return curr2
}