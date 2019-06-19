import { Injectable , OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { ApiResponse } from '../model/api.response';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiServiceURL = "http://localhost:8051/";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("RestService  ngOnInit 1: " );
    this.loadEndPointURL();
    console.log("RestService  ngOnInit 2: " );
  }

  private extractDataString(res: Response) {
    let body = res;
    let result = body || { };
    //this.endpointPort = result + "";
    return result;
  }

  loadEndPointURL(): Observable<any> {
    console.log("RestService  loadEndPointURL 1: " );

    return this.getAPIServiceURL().pipe(
      map(apiResponse => {
        console.log("RestService  loadEndPointURL 2: " );
        this.apiServiceURL = apiResponse.url;
        console.log("endpoint URL : " + this.apiServiceURL );
      })
    )
   }

  public getAPIServiceURL() {
    console.log("server URL : " + environment.server_URL);
    return this.http.get<ApiResponse>(environment.server_URL + '/apiServiceURL');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getProducts(): Observable<any> {
    return this.http.get(this.apiServiceURL + '/api/product', httpOptions).pipe(
      map(this.extractData));
  }

  getProduct(id): Observable<any> {
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
