class Node
{
    constructor (val)
    {
        this.data=val
        this.next=null
    }
}

class Queue
{
    constructor()
    {
        this.head=null
        this.tail=null
        this.count=0
    }
    enQueue(val)
    {
        var node=new Node(val);
        if (this.head==null)
            this.head=this.tail=node
        else
        {
            this.tail.next=node
            this.tail=node
            this.count++
            //console.log(this.count);
        }
    }
    deQueue()
    {
        let curr=this.head
        if(this.head==null)
            console.log("Empty Linked list!!!")
        else
        {
            this.head=curr.next
            //curr.next=null
            this.count--
        }
    }
    display()
    {
        let curr=this.head
        if(this.head==null)
        console.log("Empty Linked List!!!")
        else
        {
            while(curr.next)
            {
                console.log(curr.data + "->")
                curr=curr.next
            }
            console.log(curr.data+"-> Null")
        }
    }
}
var list = new Queue()
list.enQueue(50)
list.enQueue(10)
list.enQueue(20)
list.enQueue(30)
list.enQueue(40)
list.display()
console.log()
list.deQueue()
list.display()