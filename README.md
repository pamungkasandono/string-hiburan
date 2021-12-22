# String Hiburan

<!-- [![Rest|Api](https://namespaceit.com/uploads/post/image/1602502828.png)](https://www.google.com/search?q=rest+api&oq=rest+api&aqs=chrome.0.69i59j0i512l9.1155j0j9&sourceid=chrome&ie=UTF-8) -->

<!-- [![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png =250x)](https://nodesource.com/products/nsolid) -->

<img src="https://namespaceit.com/uploads/post/image/1602502828.png" height="100" style="cursor:pointer">

<br>

String Hiburan adalah API project gratis. Project ini berisi API sederhana yang mengenerate kata-kata/kalimat hiburan seperti, kata-kata lucu dan kata-kata bijak.

### Base Url

| Nama   | Url                                   | Deskripsi     |
| :----- | :------------------------------------ | :------------ |
| Heroku | https://string-hiburan.herokuapp.com/ | `Aktif`       |
| GitHub | https://string-hiburan.github.io/     | `Tidak Aktif` |

### End Point

```HTTP
GET /random
```

Menghasilkan satu kata-kata acak dari database

### Response

```ts
{
    id: int;
    content: string;
    author: string;
}
```

## Contoh

Mendapatkan kata-kata secara acak [buka di browser](https://string-hiburan.herokuapp.com/random)

```HTTP
GET /random
```

Filter hasil dengan menambahkan "filter" lalu di ikuti dengan keyword tertentu semisal "makna" dan "sendirian", maka hasil yang keluar yaitu semua kalimat yang menandung kata "makna" dan "sendirian" [buka di browser](https://string-hiburan.herokuapp.com/random?filter=makna,sendirian)

```HTTP
GET /random?filter=cinta,bucin
```

Untuk mengecualikan suatu kata bisa dengan menambahkan exclamation mark **`!`** menjadi "!cinta", "!bucin", maka hasil yang keluar akan mengecualikan semua kalimat yang menandung kata "cinta" dan "bucin" [buka di browser](https://string-hiburan.herokuapp.com/random?filter=!cinta,!bucin)

```HTTP
GET /random?filter=!cinta,!bucin
```

Mendapatkan hasil kalimat dengan panjangan 50 kata [buka di browser](https://string-hiburan.herokuapp.com/random?max=50)

```HTTP
GET /random?max=50
```

Kombinasikan semua [buka di browser](https://string-hiburan.herokuapp.com/random?filter=!cinta,!bucin&max=50)

```HTTP
GET /random?filter=!cinta,!bucin&max=50
```

<br>
<br>
Source: Google, Random Site, Other
