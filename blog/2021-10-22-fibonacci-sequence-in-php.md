---
title: Fibonacci Sequence di PHP
path: /fibonacci-sequence-in-php
date: 2021-10-22
summary: Fibonacci sequence atau deret fibonacci adalah sekumpulan angka yang dimulai dari 0 dan 1 dan angka - angka selanjutnya merupakan penjumlahan dari dua angka sebelumnya. Deret ini dipopulerkan oleh matematikawan asal Italia yaitu Leonardo "Fibonacci" Da Pisa (1170-1250).

# Hasil pembagian angka deret ke-(n + 1) dengan suku ke-n selalu sama yaitu 1.618 (berlaku di deret 13 dst) angka ini disebut _golden ratio_. Angka fibonacci juga memiliki keterkaitan dengan alam contohnya adalah cangkang kerang yang mirip dengan pola spiral fibonacci, bunga matahari yang memiliki putik bunga sesuai dengan deret fibonacci.
tags: ['algoritma','php', 'coding interview']
---

![background](./images/fibo2.jpeg)
[Sumber Gambar](https://id.pinterest.com/pin/445504588140102556/)

>Hasil pembagian angka deret ke-(n + 1) dengan suku ke-n selalu sama yaitu 1.618 (berlaku di deret 13 dst) angka ini disebut _golden ratio_. Angka fibonacci juga memiliki keterkaitan dengan alam contohnya adalah cangkang kerang yang mirip dengan pola spiral fibonacci, bunga matahari yang memiliki putik bunga sesuai dengan deret fibonacci.

Beberapa minggu yang lalu saya mendapat _job opportunity_ dari perusahaan asal India, sebagai syarat diterima diwajibkan mengikuti tes salah satunya adalah _coding interview_ pada tes tersebut diberikan soal untuk membuat _function_ deret fibonacci. 

Seperti kita ketahui deret fibonacci memiliki angka sebagai berikut : 0,1,1,2,3,5,8,13,21 dst. Jika dilihat mulai deret ke 3 polanya mulai teratur yaitu : 
1. Nilai deret ke-3 merupakan penjumlahan dari deret ke-1 dan deret ke-2.
2. Nilai deret ke-4 merupakan penjumlahan dari deret ke-2 dan deret ke-3
3. Nilai deret ke-5 merupakan penjumlahan dari deret ke-3 dan deret ke-4.
dst

Dari pola diatas dapat disimpulkan bahwa selain urutan ke-1 dan ke-2 nilai dari deret ke-_n_ adalah deret ke-_(n-2)_+ deret ke-_(n-1)_.

Jika kita terjemahkan rumus diatas ke dalam bahasa pemrogramman (penulis menggunakan PHP) sebagai berikut :

```php
<?php
  function fibonacci($n){
    if($n==1){
      return 0;
    }
    if($n==2){
      return 1;
    }
    return fibonacci($n-2)+fibonacci($n-1);
  }
>
```

Agar lebih mudah memahaminya anggap saja `function($n)` merupakan rumus deret ke-_n_. Jadi jika nilai _n_ = 1 akan mengembalikan nilai 0, jika nilai _n_=2 akan mengembalikan nilai 1. Selain itu kita akan akan memanggil _recursive function_ (memanggil fungsi dirinya sendiri).
Jika nilai _n_=3 maka akan menjumlahkan `function fibonacci` atau deret ke-1 dan ke-2 dimana nilai deret ke-1 dan ke-2 adalah 0 dan 1 jadi nilai deret ke 3 adalah 1. Dan seterusnya

Implementasi dari kode diatas adalah sebagai berikut, misalnya kita diminta untuk membuat 10 deret fibonacci

```php
<?php
  function fibonacci($n){
      if($n==1){
          return 0;
      }
      if($n==2){
          return 1;
      }

      return fibonacci($n-2)+fibonacci($n-1);
  }

  for($i=1;$i<=10;$i++){
        echo fibonacci($i).",";
  }

   
?>
```

Jika kode diatas dijalankan akan menghasilkan output 0,1,1,2,3,5,8,13,21,34. Semoga penjelasan diatas dapat dipahami dan bermanfaat. Sekian dan terima kasih :).
