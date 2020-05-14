# React - The Complete Guide (journal)

## Pre-Course Thoughts

I have sifted through the React documentation several times and gone through the [tutorial](https://reactjs.org/tutorial/tutorial.html) offered at reactjs.org. Asides from these efforts I have attempted to build some small sites using React but often find myself lost in design decisions that I know will only become clearer with experience.

My current understanding of the value of React is:

- page content and it's related functionality can be grouped together with JSX to simplify code organization
- the component model offers great code reusability
- faster page rendering/re-rendering (I'm uncertain of the mechanism behind this)
- backed by a strong and thriving community

Through taking this course I expect to gain experience with a couple toy projects, and to pick up pro-tips from the instructor.

The instructor's introduction to this course highlights the importance of JavaScript in the modern web. React is presented as a tool that empowers devs to build/maintain reactive components quickly. Furthermore, the course will touch on styling practices, AJAX, Redux, React-Router, and more!

## ![section][section-icon] Section 1: Getting Started

4: Max highlighted how React components are used in real world websites. I found this to be enlightening and will use this practice when I come across web pages that I am fond of or think are well designed. This emphasized the importance of components and their reusable nature.

8: React can be used in multi-page applications to add widgets (these widgets would be ignorant of eachother; needs one ReactDOM.render call per widget). Lately single-page applications have gained popularity as the page only needs to be fetched from the server once.

### ![recap][recap-icon] S1 Recap

- explored course outline
- preview of advantages React offers over pure HTML+JS or even jQuery
- I didn't really learn anything new in this section, but I now especially look forward to learning all about styling, testing, and debugging practices in React

## ![section][section-icon] Section 3: Understanding the Base Features & Syntax

28: **public** folder is basically the root folder that gets served by the web server. There should only be one html document in the public folder (index.html). For a multipage app you would run create-react-app multiple times. Building the project injects compiled stuff into the index.html. In **index.html** you likely only want to edit the head section (linking, title, ...). **manifest.json** has something to do with PWAs. **registerServiceWorker.js** is also related to PWAs ("it will basically pre-cache our script files"). **App.test.js** will be used for unit testing.

32: intro to creating components

- components are often named starting with uppercase letters to avoid collision with actual HTML elements

37: the special `props.children` prop refers to any elements/components nested in a custom component.

38: changes in the state of stateful components leads to a re-render (also the case if different props are passed to an existing component)

44: with class based components `this.setState` will merge the passed object with the existing state. With hooks and useState the useState call actually replaces the existing state with the passed object. Fortunately we can call useState multiple times and have multiple stateful objects in a functional component, this is not possible (and less necessary) in the class based approach.

45: it is good practice to prefer using stateless components as they often lead to more maintainable code. Clear data flow; easy to see where data sits and where it changes.

48: styling components with css

49: it is common (though not necessarily preferred) in React applications to use inline styling. Perhaps this makes sense as React follows DRY principles. It is more difficult to apply styles to states like :hover when using inline styling.

### ![recap][recap-icon] S2 Recap

- create-react-app takes care of build workflow
	- sets up npm, webpack, babel, dev server
- learned a directory structure for react projects
- difference between stateful and stateless components
	- in this course class based components are used when dealing with state as hooks are relatively new and not yet widespread in industry
- passing bound methods, `this.meth.bind(this, arg)`, as props is more performant than passing arrow functions that wrap methods `() => this.meth(arg)`
- inline styles allow for scoping styles to a component
	- use html style attribute
	- popular as there is less code repetition (which makes inline styling unpleasant in HTML)

[//]: # "logos used"

[section-icon]: https://img.icons8.com/nolan/64/bookmark-ribbon.png "Section"
[recap-icon]: https://img.icons8.com/metro/26/000000/book.png "Section Recap"
