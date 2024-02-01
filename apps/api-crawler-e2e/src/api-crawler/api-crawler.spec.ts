import axios from 'axios';

describe('GET /api/product', () => {
  it('Must return a product object', async () => {
    const res = await axios.get(`/api/product?url=https://www.drogasil.com.br/neosaldina-30-drageas.html`)

    expect(res.status).toBe(200);
    expect(res.data).toEqual({
      "name": "Neosaldina Dipirona 300mg + Mucato de Isometepteno 30mg + Cafeína 30mg 30 drágeas",
      "barcode": "7896094999992",
      "brand": "Neosaldina",
      "image": "https://product-data.raiadrogasil.io/images/3715998.webp?width=450&height=450&quality=85&type=resize",
      "price": "32.7"
    })
  })

  it("Should return error 5xx", async () => {
    const res = await axios.get(`/api/product?url=https://www.drogasi.com.br/neosaldina-30-drageas.html`).catch((error => {
      expect(error.response.status).toBe(500);
    }))
  })

  it("Should return error 4xx", async () => {
    const res = await axios.get(`/api/product`).catch((error => {
      expect(error.response.status).toBe(400);
    }))
  })
})
