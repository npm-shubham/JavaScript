class Node 
{
    constructor(val) 
    {
        this.data = val;
        this.next = null;
    }
}

class CircularQueue 
{
    constructor() 
    {
        this.front = null;
        this.rear = null;
        this.count = 0;
        this.size = 5;
    }
    enqueue(val) 
    {
        var node = new Node(val);
        this.count++;
        if(!this.front) 
        {
            this.front = node;
            this.rear = node;
        } 
        else if(this.count <= this.size) 
        {
            this.rear.next = node;
            this.rear = node;
        } 
        else 
        {
            
        }
    }
    dequeue() 
    {
        this.count--;
        if(!this.front) 
        {
            console.log("Queue is empty!");
        } 
        else 
        {
            this.front = this.front.next;
        }
    }
    display() 
    {
        var curr = this.front;
        while(curr) 
        {
            console.log(curr.data);
            curr = curr.next;
        }
        console.log("Count: " + this.count);
    }
}
var cq = new CircularQueue();
cq.enqueue(10);
cq.enqueue(15);
cq.enqueue(20);
cq.enqueue(25);
cq.enqueue(30);
cq.enqueue(35);
cq.enqueue(40);
cq.display();
cq.dequeue();
cq.display();
