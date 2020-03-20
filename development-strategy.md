# Sort without Articles: Development Strategy

Building this site one step at a time

---

## 0. README

- Write the `README.md`, including the final screen shot
- Include a License
- Include this `development.md` file

---

## 1. Setup

- Create boilerplate index.html
- Create boilerplate style.css
- Create boilerplate log.js
- Create boilerplate init.js
- Create boilerplate App/app.js
- Create boilerplate Data/data.js
- Create boilerplate view/view.js

---

## 2. User Story: Display un-sorted name list

**A user can see in the front page a list of unsorted names**

### DOM:

- Create tag for `section`.
- Create class `user-interface` for section.
- Create unordered list tag.
- Create class `bands` to style items.
- Add link to style file.

### Data:

- Create an object in `data.js`. It will be a list of bands.

### Log:

- Create a log state object to log the program steps.

### Init:

- Create necessary initialization to display unsorted list.

### Style:

- Create styles for `user-interface`.
- Apply `https://source.unsplash.com/nDqA4d5NL0k/2000x2000` as a background image.
- Create styles for `bands`.
- Create styles for list items.

## 3. User Story: Sort the list

**A user can watch the list sorted without the articles like 'the' , 'a' ,etc..**

### App:

- Read the list form data/data.js .
- Sort it by adding functionality to skip the first articles like 'the' , 'a'..-
- In this step app/app.js will be modified .

### Log:

- Add into project log that a sorting has been done
- log.js will be modified .
- app/app.js will be modified .

### Init:

- log step for initialization , as backlog history for the project .
- Edit init.js file .

---

## 4. User Story: Display the sorted list in a nice looking way

**A user can use a the sorted list in a well-styled page**

### View:

- Edit the view/view.js , add code to diisplay the list into dom (index.htm).

### Log:

- log the step intp the log array in view.js .


