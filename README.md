# Restaurant pocket

Restaurant pocket allows us for adding restaurants to the list of favourites. It has two views:

- **Home view** - with address input field for searching restaurants,
- **Favourite restaurants view** - a list of favourite restaurants with the Google Map. It allows to rate a restaurant and add it to favourites.

### Restaurant pocket in action!

<img src="./video.gif">

### Technologies

- React
- Redux
- Google Maps
- StyledComponents
- Prettier
- Testing:
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



### Improvement ideas

* [ ] When clicking on a restaurant, its entry and its marker could be highlighted
* [ ] Use external library for validation
* [ ] Redesign favourite restaurants view for mobile devices
* [ ] Add search field to favourite restaurants view
