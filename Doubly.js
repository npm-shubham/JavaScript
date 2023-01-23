class Node
{
    constructor (val)
    {
        this.data=val;
        this.prev=null;
        this.next=null;
    }
}

class Doubly
{
    constructor() 
    {
        this.head = null;
        this.tail = null;
        this.count=0;
    }
    addtoFirst(val)
    {
        var node=new Node(val);
        if(!this.head)
        {
            this.head=node;
            this.tail=node;
            node.prev=this.head;
        }    
        else
        {
            this.head.prev=node;
            node.prev=this.head;
            node.next=this.head;
            this.head=node;
        }
        this.count++;
    }

    addtoLast(val)
    {
        var node=new Node(val);
        let curr=this.head;
        while(curr.next)
            curr=curr.next;
        curr.next=node;
        this.prev=this.tail;
        this.count++;
    }

    deletePos(pos) 
    {
        this.count--;
        var curr = this.head;
        var i = 1;
        while(i<pos) {
            curr = curr.next;
            i++;
        }
        curr.next.prev = curr.prev;
        curr.prev.next = curr.next;
    }


    display()
    {
        var curr= this.head;
        while(curr)
        {
            console.log(curr.data);
            curr=curr.next;
        }
    }
}

var dll = new Doubly();
dll.addtoFirst(10);
dll.addtoFirst(20);
dll.display();
console.log();
dll.addtoLast(30);
dll.addtoLast(40);
dll.addtoFirst(50);
dll.display();
console.log();
dll.deletePos(2);
dll.display();