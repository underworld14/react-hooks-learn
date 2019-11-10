# what is Hooks ?

Hooks is a additional features that we can use the state and other life cycle component in functional component without declare a class component.

## How to Use Hooks

1. import `useState` from react library like this ..

```javascript
import React, { useState } from "react";
```

2. declare `state` just like declare the variables like this :

```javascript
const [name, setName] = useState("Yusril");
const [input, setInput] = useState(null);
```

3. How to call the state :

```javascript
  ...
      <h1> Hello, {name} Selamat Siang ! </h1>
  ...
```

4. How to update the state :

```javascript
  ...
    const handleChangeName = event => {
    event.preventDefault();
    setName(input);
    setInput(null);
  };
  ...
  ...
    <input onChange={event => setInput(event.target.value)} value={input} />
  ...
```
