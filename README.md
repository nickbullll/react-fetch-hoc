React Fetch HOC
=================
[![npm version](https://badge.fury.io/js/react-fetch-hoc.svg)](https://badge.fury.io/js/react-fetch-hoc)

An experiment to quickly integrate and use an API requests with High Order Component 🚴🏽

###### The API might change any day.
###### Do not use in Production!

What is it ?
-----

It's a simple library build on <a href="https://facebook.github.io/react/docs/higher-order-components.html">React High Order Components</a> and on <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">fetch</a> (currently)
which assumes responsibility for receiving data from the server and transferring it to your component.

### Example

```
import React from 'react';
import fetch from 'isomorphic-fetch';
import fetchHoc from 'react-fetch-hoc';

const API_ROUTE = 'https://jsonplaceholder.typicode.com/posts';

const Post = ({ title, body }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{body}</div>
    </div>
  )
}

const withFetchPost = fetchHoc(props => fetch(`${API_ROUTE}${props.id}`));
const PostContainer = withFetchPost(Post);

const App = ({ id = 1 }) => <PostContainer id={id} />
export default App;

```

The API get call to `https://jsonplaceholder.typicode.com/posts/1` will send us response as
```
{
  title: 'Summer',
  body: 'That summer was so fine that I dec...'
}
```

What problem does it solve ?
-----

Basically everyone is familiar with using fetch/axios in the `componentDidMount` method. This solution is not the cleanest of all. The concept built into this library allows us keep our components clean and just re-use them where necessary, changing only the shell.

FAQ ?
-----

### Feature Requests/Find Bug ?

If you see the potential in this library let's talk. Search for existing GitHub issues and join the conversation or create new!

### Can I use this in production?

I wouldn't. Many use cases are not be considered yet. If you find some use cases this lib can't handle yet, please file an issue.
