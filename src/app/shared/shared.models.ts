export class Movie{
    id: number;
    site_id: number;
    origin: string;
    author: string;
    country: string;    
    discr: string;
    genre: string;
    length: string;
    year: string;
    link: string; 
    img: string;
    title:  string;
}

export class PaginationModel{
    pageIndex: number | string = 0;
    pageSize: number | string = 25;
    length: number | string = null;
}

export class AuthData{
    user_id: string | number;
    user_name: string;
    exp_time: string | number;
    token: string;
}

export class User{
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

export class Search{
    title?: string;
    genre?: string;
    year?: string;
    country?: string;
    author?: string;
}

export class Error{
    error: string;
    description?: string;
    place?: string;
}

export class Autocomplete{
    countries: [];
    years: [];
    genres: [];   
}