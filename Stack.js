class Node
{
    constructor(value)
    {
        this.data=value
        this.next=null
    }
}

class Stack
{
    constructor()
    {
        this.head=null
        //this.size=0
    }

    push(value)
    {
        var node=new Node(value)
        node.next=this.head;
        this.head=node;
    }

    pop()
    {
        if(this.head==null)
            console.log("UnderFlow of Stack !!!")
        else
        {
            console.log("Popped Value -> "+this.head.data)
            this.head=this.head.next;
        }
    }

    display()
    {
        if(this.head==null)
            console.log("Underflow Stack")
        else
        {
            let curr=this.head;
            while(curr.next)
            {
                console.log(curr.data+"->")
                curr=curr.next;
            }
            console.log(curr.data+"->NULL")
        }
    }
}

var lst=new Stack();
lst.push(10);
lst.push(20);
lst.push(30);
lst.display();
lst.pop();
lst.display();