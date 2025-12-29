import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
// import { Product } from '../models/product.model';
import { AuthService, Order, Product } from '../auth/auth';

// interface Product {
//   name: string;
//   category: string;
//   price: number;
//   image: string;
//    quantity?: number;
// }



@Component({
  selector: 'app-products',
  imports: [CommonModule],
  standalone: true,  
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
// export class Products {

//   categories: string[] = ['All', 'Electronics', 'Grocery', 'Mobile', 'Clothing'];

//   products: Product[] = [
//      { name: 'Laptop', category: 'Electronics', price: 1200, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80' },
//   { name: 'Smartphone', category: 'Mobile', price: 800, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80' },
//   { name: 'Headphones', category: 'Electronics', price: 150, image: 'https://images.unsplash.com/photo-1580894908361-1b3ee8f6b57e?auto=format&fit=crop&w=400&q=80' },
//   { name: 'Jeans', category: 'Clothing', price: 60, image: 'https://images.unsplash.com/photo-1593032465174-fdc2f8463cbf?auto=format&fit=crop&w=400&q=80' },
//   { name: 'Milk', category: 'Grocery', price: 2, image: 'https://images.unsplash.com/photo-1589927986089-35812389fc71?auto=format&fit=crop&w=400&q=80' },
//   { name: 'Smartwatch', category: 'Electronics', price: 200, image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80' },
//   { name: 'Bread', category: 'Grocery', price: 3, image: 'https://images.unsplash.com/photo-1604908177520-678c5b1dba44?auto=format&fit=crop&w=400&q=80' },

//   // New additions
//   { name: 'Tablet', category: 'Electronics', price: 400, image: 'https://images.unsplash.com/photo-1587825140708-6c47fc96b7c0?auto=format&fit=crop&w=400&q=80' },
//   { name: 'T-shirt', category: 'Clothing', price: 25, image: 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?auto=format&fit=crop&w=400&q=80' },
//   { name: 'Sneakers', category: 'Clothing', price: 120, image: 'https://images.unsplash.com/photo-1600180758895-3c037cebf3e1?auto=format&fit=crop&w=400&q=80' },
//   { name: 'Novel Book', category: 'Books', price: 15, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80' },
//   { name: 'Football', category: 'Sports', price: 30, image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80' },
//   { name: 'Office Chair', category: 'Furniture', price: 180, image: 'https://images.unsplash.com/photo-1598300054730-6e3f0f8d3d18?auto=format&fit=crop&w=400&q=80' },
//   { name: 'Refrigerator', category: 'Electronics', price: 900, image: 'https://images.unsplash.com/photo-1581579182767-0e26c7f08a3e?auto=format&fit=crop&w=400&q=80' },
//   { name: 'Orange Juice', category: 'Grocery', price: 4, image: 'https://images.unsplash.com/photo-1571687949921-daa3b5e6c1c1?auto=format&fit=crop&w=400&q=80' },
//   { name: 'Yoga Mat', category: 'Sports', price: 35, image: 'https://images.unsplash.com/photo-1599058917215-1c85a5c2a28b?auto=format&fit=crop&w=400&q=80' },  ];

// selectedCategory = 'All';

//   cart: Product[] = [];

//   get filteredProducts(): Product[] {
//     return this.selectedCategory === 'All'
//       ? this.products
//       : this.products.filter(p => p.category === this.selectedCategory);
//   }

//   selectCategory(category: string) {
//     this.selectedCategory = category;
//   }

//   addToCart(product: Product) {
//     const existing = this.cart.find(item => item.name === product.name);

//     if (existing) {
//       existing.quantity!++;
//     } else {
//       this.cart.push({ ...product, quantity: 1 });
//     }
//   }

//   increaseQty(index: number) {
//     this.cart[index].quantity!++;
//   }

//   decreaseQty(index: number) {
//     if (this.cart[index].quantity! > 1) {
//       this.cart[index].quantity!--;
//     }
//   }

//   removeFromCart(index: number) {
//     this.cart.splice(index, 1);
//   }

//   get totalPrice(): number {
//     return this.cart.reduce((total, item) => total + item.price * item.quantity!, 0);
//   }

//   confirmOrder() {
//     alert(`Order Confirmed! Total Amount: $${this.totalPrice}`);
//     this.cart = [];
//   }
// }


export class Products{

  totalPrice = 0;
 categories: string[] = ['All', 'Electronics', 'Grocery', 'Mobile', 'Clothing', 'Sports', 'Books', 'Furniture'];
  selectedCategory = 'All';

  products: Product[] = [];
  cart: Product[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.authService.getAllProducts().subscribe(res => {
      this.products = res;
    }, err => {
      console.error('Error fetching products', err);
    });
  }

  get filteredProducts(): Product[] {
    return this.selectedCategory === 'All'
      ? this.products
      : this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  // addToCart(product: Product) {
  //   const existing = this.cart.find(item => item.id === product.id);
  //   if (existing) {
  //     existing.quantity!++;
  //   } else {
  //     this.cart.push({ ...product, quantity: 1 });
  //   }
  // }

addToCart(product: Product) {
  const existing = this.cart.find(item => item.id === product.id);
  const newQuantity = existing ? existing.quantity! + 1 : 1;

  this.authService.checkStock(product.id!, newQuantity)
    .subscribe({
      next: (isInStock) => {
        if (!isInStock) {
          alert('Out of stock! You cannot add more of this product.');
          return;
        }

        if (existing) {
          existing.quantity!++;
         
        } else {
          this.cart.push({ ...product, quantity: 1 });
          
        }
      },
      error: () => {
        alert('Inventory service not reachable. Please try again.');
      }
    });
}





 increaseQty(index: number) {
  const item = this.cart[index];

  if (!item.id) {
    alert('Product ID missing');
    return;
  }

  const newQuantity = item.quantity! + 1;

  // 🔴 Check inventory before increasing
  this.authService.checkStock(item.id, newQuantity)
    .subscribe({
      next: (isInStock) => {
        if (!isInStock) {
          alert('Maximum stock reached. Cannot add more.');
          return;
        }

        item.quantity!++;
      },
      error: () => {
        alert('Unable to check inventory. Please try again.');
      }
    });
}


  decreaseQty(index: number) {
    if (this.cart[index].quantity! > 1) this.cart[index].quantity!--;
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  // get totalPrice(): number {
  //   return this.cart.reduce((total, item) => total + item.price * item.quantity!, 0);
  // }

 confirmOrder() {
    const userId = this.authService.getUserId(); // logged-in user

    if (!userId) {
      alert('Please login to place an order');
      return;
    }

    this.cart.forEach(item => {

      const order: Order = {
        userId: userId,
        productId: item.id!,
        quantity: item.quantity!,
          productName: item.name!,

        totalPrice: item.price! * item.quantity!,
        createdDate: ''
      };

      this.authService.createOrder(order).subscribe({
        next: () => {
          console.log('Order placed for product:', item.id);
        },
        error: () => {
          alert('Failed to place order');
        }
      });
    });

    alert('Order confirmed successfully!');
    this.cart = [];
    this.totalPrice = 0;
  }
}