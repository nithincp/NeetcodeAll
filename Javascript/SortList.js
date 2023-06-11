// Leetcode Problem - 148

var ListNode = function (val, next) {
  this.val = val;
  this.next = next;
};

var sortList = function (head) {
  function getMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  function merge(h1, h2) {
    let h3, l;
    if (h1.val > h2.val) {
      h3 = h2;
      l = h2;
      h2 = h2.next;
    } else {
      h3 = h1;
      l = h1;
      h1 = h1.next;
    }

    while (h1 !== null && h2 !== null) {
      if (h1.val > h2.val) {
        l.next = h2;
        h2 = h2.next;
      } else {
        l.next = h1;
        h1 = h1.next;
      }
      l = l.next;
    }

    if (h1 === null) {
      l.next = h2;
    }

    if (h2 === null) {
      l.next = h1;
    }

    return h3;
  }

  if (head === null) {
    return head;
  }

  if (head.next === null) {
    return head;
  }

  let h1 = head;
  let mid = getMiddle(head);
  let h2 = mid.next;
  mid.next = null;

  h1 = sortList(h1);
  h2 = sortList(h2);

  return merge(h1, h2);
};
