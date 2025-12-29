import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Product } from '../models/product.model';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
export interface RegisterRequest {
  name: string;
  lastName: string;
  email: string;
  password: string;
  contact: string;
}
export interface Product {
  category: string;
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string; 
}

export interface Order {
  id?: number;
  userId: number;
  productId: number;
  quantity: number;
  totalPrice: number;
  createdDate: string;
  productName?: string;
  
}


export interface RegisterResponse {
  message: string;
  // optionally: user data or JWT token if returned
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//  private userServiceUrl = 'http://localhost:8080/api/auth';  
//   private productServiceUrl = 'http://localhost:8082/products'; 
//  private inventoryUrl = 'http://localhost:8084/inventory';
//   private orderUrl = 'http://localhost:8083/orders';



  private apiGatewayUrl = 'http://localhost:8081';  // API Gateway base URL
  private userServiceUrl = `${this.apiGatewayUrl}/api/auth`;  // User Service URL via Gateway
  private productServiceUrl = `${this.apiGatewayUrl}/products`;  // Product Service URL via Gateway
  private inventoryUrl = `${this.apiGatewayUrl}/inventory`;  // Inventory Service URL via Gateway
  private orderUrl = `${this.apiGatewayUrl}/orders`;  // Order Service URL via Gateway

  constructor(private http: HttpClient , @Inject(PLATFORM_ID) private platformId: Object) {}

  registerUser(data: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.userServiceUrl}/register`, data);
  }

 loginUser(loginData: { email: string; password: string }): Observable<any> {
  return this.http.post(`${this.userServiceUrl}/login`, loginData);
}

saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  // getUserId(): number | null {
  //   const token = localStorage.getItem('token');
  //   if (!token) return null;

  //   const payload = JSON.parse(atob(token.split('.')[1]));
  //   return payload.userId; // must match backend JWT claim
  // }

//   getUserId(): number | null {
//   const token = localStorage.getItem('token');
//   if (!token) return null;

//   try {
//     const payload = JSON.parse(
//       decodeURIComponent(
//         atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))
//           .split('')
//           .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
//           .join('')
//       )
//     );

//     return payload.userId ?? null; // must match backend claim
//   } catch (e) {
//     console.error('Invalid token', e);
//     return null;
//   }
// }


getUserId(): number | null {
    if (!isPlatformBrowser(this.platformId)) {
      // running on server, localStorage not available
      return null;
    }

    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.userId ?? null;
    } catch (e) {
      console.error('Invalid token', e);
      return null;
    }
  }

getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productServiceUrl);
  }

   checkStock(productId: number, quantity: number): Observable<boolean> {
    return this.http.get<boolean>(
      `${this.inventoryUrl}/check/${productId}/${quantity}`
    );
  }

 

 



  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.orderUrl}`, order);
  }

   getOrdersByUser(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.orderUrl}/user/${userId}`);
  }
}
