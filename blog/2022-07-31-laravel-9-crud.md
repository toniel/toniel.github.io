---
title: Laravel 9 CRUD Part#1
path: /laravel-9-crud-1
date: 2022-07-31
summary: Hallo teman - teman, pada kesempatan kali ini saya akan berbagi tutorial CRUD Laravel 9
tags: ['laravel','php']
---

CRUD adalah salah satu aspek penting dalam pembuatan aplikasi, karena hampir semua aplikasi atau website dinamis membutuhkan  proses CRUD. Pada kesempatan kali ini saya akan berbagi tutorial CRUD Laravel 9.

# Install Laravel 9
Mari mulai dengan instalasi Laravel 9 melalui composer dengan perintah
```sh
composer create-project laravel/laravel laravel-crud
```

atau melalui [laravel installer](https://packagist.org/packages/laravel/installer).

```sh
laravel new laravel-crud
```

Masuk ke directori project kemudian jalankan perintah `php artisan serve` untuk menjalankannya

# Konfigurasi Database
Langkah kedua buat konfigurasi database di file `.env`
```sh
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_crud
DB_USERNAME=root
DB_PASSWORD=
```

# Membuat Model dan Migration
Study kasus tutorial ini adalah CRUD untuk Buku dan Kategori. Mari kita buat Category dan Book model beserta migration.

## Category
```sh
php artisan make:model Category -m
```

Setelah perintah tersebut dijalankan, akan terdapat file `Category.php` yang berada di directory `app/Models` dan file migration yang terletak di `database/migration`.
Pada file migration untuk category isikan seperti berikut
>2022_07_31_124144_create_categories_table.php

```php
public function up()
{
  Schema::create('categories', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->timestamps();
  });
}
```

## Book
```sh
php artisan make:model Book -m
```

Pada file book migration buat seperti ini

>2022_07_31_124532_create_books_table.php

```php
public function up()
{
  Schema::create('books', function (Blueprint $table) {
    $table->id();
    $table->foreignIdFor(Category::class)->constrained();
    $table->string('title');
    $table->year('year_published');
    $table->timestamps();
  });
}
```

>Option `-m` berguna untuk membuat migration. `foreignIdFor` digunakan untuk membuat foreign key dengan model yang didefinisikan.

Setelah selesai jalankan perintah `php artisan migrate`. Cek di database maka akan ada tabel categories dan books dengan struktur sebagai berikut.

###  categories table
```sh
mysql> SHOW COLUMNS FROM categories;
+------------+-----------------+------+-----+---------+----------------+
| Field      | Type            | Null | Key | Default | Extra          |
+------------+-----------------+------+-----+---------+----------------+
| id         | bigint unsigned | NO   | PRI | NULL    | auto_increment |
| name       | varchar(255)    | NO   |     | NULL    |                |
| created_at | timestamp       | YES  |     | NULL    |                |
| updated_at | timestamp       | YES  |     | NULL    |                |
+------------+-----------------+------+-----+---------+----------------+
4 rows in set (0.01 sec)
```

### books table

```sh
mysql> SHOW COLUMNS FROM books;
+----------------+-----------------+------+-----+---------+----------------+
| Field          | Type            | Null | Key | Default | Extra          |
+----------------+-----------------+------+-----+---------+----------------+
| id             | bigint unsigned | NO   | PRI | NULL    | auto_increment |
| category_id    | bigint unsigned | NO   | MUL | NULL    |                |
| title          | varchar(255)    | NO   |     | NULL    |                |
| year_published | year            | NO   |     | NULL    |                |
| created_at     | timestamp       | YES  |     | NULL    |                |
| updated_at     | timestamp       | YES  |     | NULL    |                |
+----------------+-----------------+------+-----+---------+----------------+
```

Sampai disini dulu tutorialnya, selanjutnya kita akan bahas templating.