# Use Effect (Component Life Cycle at React Hooks)

## Cheatsheet

1. Component Did Mount

```javascript
//Class
componentDidMount() {
    console.log('I just mounted!');
}

//Hooks
useEffect(() => {
    console.log('I just mounted!');
}, [])

```

2. Component Will UnMount

```javascript
//Class
componentWillUnmount() {
    console.log('I am unmounting');
}

//Hooks
useEffect(() => {
    return () => console.log('I am unmounting');
}, [])

```

3. Component Will Receive Props

```javascript
//Class
componentWillReceiveProps(nextProps) {
    if (nextProps.count !== this.props.count) {
        console.log('count changed', nextProps.count);
    }
}

//Hooks
useEffect(() => {
    console.log('count changed', props.count);
}, [props.count])

```

## For More Documentation and Information about `useEffect`

`https://reactjs.org/docs/hooks-effect.html`
