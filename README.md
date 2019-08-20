# easyname

A rest service that helps you pronounce Chinese names (Note: incoming string shall be encoded for url)


```javascript
var chinese = encodeURI('郑晓舟') // %E9%83%91%E6%99%93%E8%88%9F
```

```bash
curl -G https://easyname.hulaorui.com/name/%E9%83%91%E6%99%93%E8%88%9F

Hsiao-Chou Cheng
```


