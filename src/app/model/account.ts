export class Account{ 

    public idaccount: number; 
    public totalamount:number;
    public idcustomer:number;
    public customer:Customer;

    constructor(){} 
}

export class Customer{ 

    public idcustomer:number;
    public fullname:string;

    constructor(){} 
}