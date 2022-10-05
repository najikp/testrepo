var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    
    let products = [
      {
          name: 'THE WEEKND WALL ART',
          category: 'Wall Art',
          discription: 'THE WEEKND WALL ART | ARTIST : NAMAN KAPOOR',
          image: 'https://cdn.shopify.com/s/files/1/0151/0741/products/691ad1776c292a682d4c19e985cd511d_480x480.jpg?v=1578644973',
      },
      {
          name: 'DEADPOOL WALL ART',
          category: 'Wall Art',
          discription: 'DEADPOOL WALL ART | ARTIST : JAVAD ALI',
          image: 'https://cdn.shopify.com/s/files/1/0151/0741/products/d58bda4b7e3e50525d72d18bacb2c285_480x480.jpeg?v=1578638384',
      },
      {
          name: 'BREAKING BAD | JESSE PINKMAN',
          category: 'Wall Art',
          discription: 'BREAKING BAD | WALL ART | ARTIST : GUB GUB',
          image: 'https://cdn.shopify.com/s/files/1/0151/0741/products/6da93e1f570978a0a9885f0751810cb9_480x480.jpg?v=1578643750',
      },
      {
          name: 'RAFAEL NADAL WALL ART ',
          category: 'Wall Art',
          discription: 'RAFAEL NADAL WALL ART | ARTIST : ANSH THAREJA',
          image: 'https://cdn.shopify.com/s/files/1/0151/0741/products/c930459a19f00ddef44ffee18f5f4895_480x480.jpg?v=1578648357',
      },
      {
          name: 'RELAX BUDDHA WALL ART',
          category: 'Wall Art',
          discription: 'RELAX BUDDHA WALL ART | ARTIST : ASWANTH',
          image: 'https://cdn.shopify.com/s/files/1/0151/0741/products/3cdc546bdecc18a8c43d249d0997fd4e_480x480.jpg?v=1578644181',
      },
      {
          name: 'JUSTIN BEIBER WALL ART',
          category: 'Wall Art',
          discription: 'JUSTIN BEIBER WALL ART | ARTIST : MAITREYI BHATIA',
          image: 'https://cdn.shopify.com/s/files/1/0151/0741/products/4c9f274058cda677f334f5373216e25b_480x480.jpeg?v=1578642537',
      },
      {
          name: 'TYION LANNISTER | WALL ART',
          category: 'Wall Art',
          discription: 'GAME OF THRONES WALL ART | ARTIST : GUB GUB',
          image: 'https://cdn.shopify.com/s/files/1/0151/0741/products/c3aae3415087fae6d190da738f52769d_480x480.jpg?v=1578643751',
      },
      {
          name: 'DAREDEVIL WALL ART ',
          category: 'Wall Art',
          discription: 'DAREDEVIL WALL ART | ARTIST : NANDHU ',
          image: 'https://cdn.shopify.com/s/files/1/0151/0741/products/5ac853935618a8b907f8b78e6ca18202_480x480.jpeg?v=1578641611',
      }
  
      
  ]
  
      res.render('index', { products,user:true});
  
  });
  module.exports = router;