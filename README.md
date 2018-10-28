# Favourite restaurants

This is an application, which allows us for adding restaurants to the list of favourites. It has two views:

- Home view - with input (address) field for searching restaurants
- Favourite restaurants view - a list of favorite restaurants with the google map. It allows to rate a restaurant and add to favorites.



### Favourite restaurants in action!

<img src="./video.gif">

### Technologies

- React
- Redux
- Google Maps
- StyledComponents
- Prettier
- Testing tools:
  - Enzyme
  - Sinon
  - Deep-freeze


### Run

1. Install all dependencies:

   ```bash
   yarn
   ```

2. Copy `API_KEY` from the e-mail and paste it into `src/api-key.js` file.

   ```javascript
   const API_KEY = '<FILL_ME>';
   
   export default API_KEY;
   ```

3. Run app:

   ```bash
   npm start
   ```


### Test 

1. Run tests

``` bash
npm test
```



### What could be better?

* [ ] When clicking on a restaurant, its entry and its marker could be highlighted
* [ ] Use external library for validation
* [ ] Redesign favourite restaurants view for mobile devices
