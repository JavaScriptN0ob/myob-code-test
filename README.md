# Qantas Frontend Code Test. Author: Wenpei Zhang<span id="top"></span>

[Get Started](#start) 


## Getting Started <span id="start"></span>    
### Installation    
1. Using `yarn` to install all dependencies please.    
### Start    
1. using ` yarn start ` to run, please avoid current localhost 3000 conflict please.    
2. Default Searching Hotels will be sorted from "price high - low".    
3. Loading preview images could need time depending on internet speed.    
### Test    
1. Using ` yarn test ` to run all test files please.    


### Approach of coding:    
1. I separate page-mock by Logo and main page(Sorting Hotels)    


* As Logo could reuse in many place and components, so I move it stay at the top of sorting hotels page.    
* Sorting Hotels should be data(API response) live. Combined with sorting order and hotels results, so I name it SortingHotels.   


2. Main page divide to two parts(not includes Logo) -> Heading & Content    
* Heading includes sum of hotels results and sort by dropdown.    
    * Sum will take a total number(length) of results for single responsibility, which this component should only consider receive a sum and display the length properly.    
    * SortBy is a dropdown, which normally receives value and onchange method. In my case, I pass a options list as array, make it map a dropdown options which will be easy to maintain and scalable.   
* Content is including a Hotels component(I used plural here), as it will received a sorted hotel results list and maps list.length hotel components(also has a border-bottom with lightgrey color).    
* Heading and content are more like a container, which provide layout for my components in SortingHotels.    


3. Hotel component    
* PreviewImage: I create an Image component which receive a image object includes url can caption. Image will take the responsibility of render image itself. PreviewImage is using as a container with sizes.    
* Detail is a flex-grow: 1; component, after PreviewImage took the left room. Detail also includes multiple components.    
    * Information which includes title(name) of the hotel, rating component and address.
        * TitleWithRating is a flex component, which including a row layout of title and rating.    
        * Address will receive an array and using join method to create proper address to show in UI.    
    * Offer includes offerName and cancellation information. I used flex-grow:1; for cancellation + margin-bottom to provide cancellation ability to stay at bottom, no matter if cancellable(having green test).    
    * Price includes unit title, amount and also savings. Very similar to cancellation, I use flex-grow and margin to layout price component.
    * Promotion is a absolute outside of Image and Detail. Due to it is on top of PreviewImage, but promotion is not same responsibility as image component, even these data are from different key(property and offer). So I use a position absolute to layout the promotion.    


4. Some extract functions/method    
* It could provide more testable ability to the code.    
* List: `Offer -> checkCancellable`, `SortBy -> getOptionsText`, `SortingHotels -> sortHotels`.    

5. Rating    
* Base on rating props: type and value. I created two functions.    
* `getIconType` returns circle or star icon base on self or star.    
* `getRateArray` returns an array base on a prop of number from `0 ~ 5(0.5 per unit)`;
* StyledRate is for decoration of svg files only, provide color and move black basement color outside of current area.    
* Star and Circle will receive an number. Star/Circle focus on returning full/half, gold/lightgrey color Stars/Circles. Rating focus on using map to generate total of 5 Icons.


[Back to Top](#top)
