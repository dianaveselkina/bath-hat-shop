const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject('Error');
};

class Api {
  constructor(data) {
    this.baseUrl = data.baseUrl;
    this.headers = data.headers;
  }
  getProductList() {
    return fetch(`${this.baseUrl}/products`, {
      method: 'GET',
      headers: this.headers,
    }).then(onResponse);
  }
  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    }).then(onResponse);
  }

  authorizationUser(data) {
    return fetch(`${this.baseUrl}/signin`, {
      headers: this.headers,
      method: 'POST',
      body: JSON.stringify(data),
    }).then(onResponse);
  }

  searchProducts(path) {
    return fetch(`${this.baseUrl}/products/search?query=${path}`, {
      headers: this.headers,
    }).then((e) => onResponse(e));
  }
  addLike(productId) {
    return fetch(`${this.baseUrl}/products/likes/${productId}`, {
      headers: this.headers,
      method: 'PUT',
    }).then(onResponse);
  }
  deleteLike(productId) {
    return fetch(`${this.baseUrl}/products/likes/${productId}`, {
      headers: this.headers,
      method: 'DELETE',
    }).then(onResponse);
  }
  changeProductLike(productId, isLiked) {
    return fetch(`${this.baseUrl}/products/likes/${productId}`, {
      headers: this.headers,
      method: isLiked ? 'DELETE' : 'PUT',
    }).then(onResponse);
  }

  getProductById(id) {
    return fetch(`${this.baseUrl}/products/${id}`, {
      headers: this.headers,
    }).then(onResponse);
  }
  addProductReview(productId, data) {
    return fetch(`${this.baseUrl}/products/review/${productId}`, {
      headers: this.headers,
      method: 'POST',
      body: JSON.stringify(data),
    }).then(onResponse);
  }
  deleteProductReview(productId, reviewId) {
    return fetch(`${this.baseUrl}/products/review/${productId}/${reviewId}`, {
      headers: this.headers,
      method: 'DELETE',
    }).then(onResponse);
  }
}

const config = {
  baseUrl: 'https://api.react-learning.ru',
  headers: {
    'Content-Type': 'application/json',
    authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyM2MzMDMyOTFkNzkwYjNmYzk2N2MiLCJncm91cCI6Imdyb3VwLTEyIiwiaWF0IjoxNjgyMDY1MDgwLCJleHAiOjE3MTM2MDEwODB9.podOuWY9CAovzjgr22aT8s3D__ihq20XmXXT06INvUA',
  },
};

export const api = new Api(config);
