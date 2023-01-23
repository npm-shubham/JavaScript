class Node   //node creation
{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}

class LinkedList
{
    //Head Node
    constructor()
    {
        this.head=null;
        this.size=0;
    }
    /* ########################Insert Node######################## */
    //insert at first
    insertatFirst(val)
    {
        var node=new Node(val);
        if(this.head==null)
            this.head=node;
        else
        {
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }

    //insert at last
    insertatLast(val)
    {
        var node=new Node(val);
        let curr=this.head;
        while(curr.next)
            curr=curr.next;
        curr.next=node;
        this.size++;
    }

    //insert at position
    insertatPos(data, pos)
    {
        var node=new Node(data);
        let i=1;
        let curr=this.head;
        if(pos<0 || pos>this.size)
            console.log("Invalid Position !!!")
        else if(pos==1)
            this.insertatFirst(data);
        else if(pos==this.size)
            this.insertatLast(data);
        else
        {
            while(i<pos-1)
            {
                curr=curr.next;
                i++;
            }
            node.next=curr.next;
            curr.next=node;
            this.size++;
        }
    } 

    //display
    display()
    {
        let curr=this.head;
        if(this.head==null)
            console.log("Empty List")
        else
        {
            while(curr.next)
            {
                console.log(curr.data+"->");
                curr=curr.next;
            }
            console.log(curr.data+"->null");
        }
    }
    /* ######################Delete Node######################### */
    //delete at first
    deleteatFirst()
    {
        if(this.head==null)
            console.log("Empty Queue !!!");
        else
        {
            this.head=this.head.next;
            this.size--;
        }
    }

    //delete at last
    deleteatLast()
    {
        let curr=this.head;
        while(curr.next.next)
            curr=curr.next;
        curr.next=null;
        this.size--;
    }

    //delete at position
    deleteatPos(pos)
    {
        let curr=this.head;
        let i=1;
        while(i<pos-1)
        {
            curr=curr.next;
            i++;
        }
        curr.next=curr.next.next;
        this.size--;
    }
    
}

var list=new LinkedList();
//list.display();
list.insertatFirst(10);
list.insertatFirst(20);
list.insertatFirst(30);
list.insertatLast(40);
list.insertatPos(60, 2);
list.display();
list.deleteatFirst();
list.display();
//list.deleteatLast();
//list.display();
list.deleteatPos(3);
list.display();
