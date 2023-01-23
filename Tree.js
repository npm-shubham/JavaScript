class Tree
{
    constructor(val)
    {
        const data=[];
        this.data[0]=val
        this.next=null
    }

    //Root node
    root(val)
    {
        this.head=val
        this.lvl=0
    }

    insert(data)
    {
        var node = new Tree(data)
        if(this.root==null)
            this.root=node
        else
        {
            var i=0;
            while (!this.data[i])
                i++
            this.data[i]=node
        }
    }
}

var tree=new Tree(5)
tree.insert(10)
tree.insert(20)