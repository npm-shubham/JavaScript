class Node
{
    constructor(val)
    {
        this.data=val
        this.right=null
        this.left=null
    }
}

class BST
{
    constructor(root)
    {
        this.root=root
    }

    insert(value)
    {
        var node = new Node(value)
        if(this.root === null)
        {
            this.root = node
            return this
        }
        let curr = this.root
        while(true)
        {
            if(value < curr.data)
            {
                if(curr.left === null)
                {
                    curr.left = node
                    return this
                }
                curr = curr.left
            } 
            else 
            {
                if(curr.right === null)
                {
                    curr.right = node
                    return this
                } 
                curr = curr.right
            }
        }
    }
}