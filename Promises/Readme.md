# Promises

ES6 brings to the standard JavaScript specification a new feature Promises (a feature available
in some of the new and latest JS libraries and frameworks) that solves many of the
significant problems in the callbacks – the only approach to async.

```
x = getData();
y = getMoreData(x);
z = getMoreData(y);
```

Prior to ES6, you could have asynchronously fetched x and then passed it as an
argument to fetch y and similarly for z, using callbacks as follows:

```
getData(function(x){
  getMoreData(x, function(y){
    getMoreData(y, function(z){
    //...
    });
  });
});
```

