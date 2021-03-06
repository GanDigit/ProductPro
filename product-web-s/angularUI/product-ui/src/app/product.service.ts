import { Injectable , OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { ApiResponse } from '../model/api.response';
import { switchMap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{

  //To access PRODUCT-API mircorservice. The value will be initialized during ngOnInit
  apiServiceURL = "1111";
  
  /////////// The URL to acess springboot apis from angular 
  // ----- Developement time: when running via ng serve, it can point to localhost:9080
  // webSericeURL = environment.webSericeURL;
  // ----- Production time: it is already inside localhost:9080, so the url should be empty, otherwise, it will bring CORS error
  webSericeURL = "";
  // Lets allways keep for Production time....

  constructor(private http: HttpClient) { }

  loadEndPointURL(): Observable<any> {
    console.log("ProductService  loadEndPointURL 1: " );
    return this.getAPIServiceURL().pipe(
      map(apiResponse => {
        console.log("ProductService  loadEndPointURL 2: " );
        this.apiServiceURL = apiResponse.url;

        return this.http.get(this.apiServiceURL + '/api/product', httpOptions).pipe(
          map(this.extractData));
      })
    )
   }
  
   ngOnInit() {
    console.log("ProductService  ngOnInit 1.1: " );
    this.mySimpleMethod();
    console.log("ProductService  ngOnInit 1.2: " );
    this.getAPIServiceURL();
    console.log("ProductService  ngOnInit 2.2: " );
  }

  private extractDataString(res: Response) {
    let body = res;
    let result = body || { };
    //this.endpointPort = result + "";
    return result;
  }

  public mySimpleMethod() {
    console.log("mySimpleMethod URL : " + this.webSericeURL);
  }

  public getAPIServiceURL() {
    console.log("webSericeURL URL : " + this.webSericeURL);
    return this.http.get<ApiResponse>(this.webSericeURL + '/api/apiServiceURL');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getProducts(): Observable<any> {
    console.log("ProductService ----> getProducts 1 : ");

    return this.getAPIServiceURL().pipe(
      switchMap(apiResponse => {
        //Store this end point for future reference..
        this.apiServiceURL = apiResponse.url;

        console.log("ProductService ----> getProducts 2: Before callling : " + this.apiServiceURL + '/api/product');

        return this.http.get(this.apiServiceURL + '/api/product' , httpOptions).pipe(map(this.extractData));
      })
    )
   }

  getLoginUserName(): Observable<any> {
    console.log("ProductService  getLoginUserName 1: " );
    return this.http.get(this.apiServiceURL + '/api/loginUserName', httpOptions).pipe(
      map(this.extractData));
  }

  getProduct(id): Observable<any> {
    console.log("ProductService  getProduct 1: " );

    return this.http.get(this.apiServiceURL + '/api/product/' + id, httpOptions).pipe(
      map(this.extractData));
  }

  addProduct (product): Observable<any> {
    console.log("Add product ---> " + JSON.stringify(product));
    return this.http.post<any>(this.apiServiceURL + '/api/product', JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }

  updateProduct (id, product): Observable<any> {
    return this.http.put(this.apiServiceURL + '/api/product', JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct (id): Observable<any> {
    return this.http.delete<any>(this.apiServiceURL + '/api/product/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
