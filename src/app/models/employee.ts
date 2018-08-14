interface IEmployee {
    firstname: string;
    lastname: string;
    email;
}

export class Employee implements IEmployee {
    firstname: string;
    lastname: string;
    email: any;
}
