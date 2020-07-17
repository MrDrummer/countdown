# Goal
I want a method that when given a javascript Date and a set of "breakpoints", it would call a function at the desired intervals.

E.G.
```js
{
  lessThan: 600, // 10 mins
  every: 60 // 1 minute
},
{
  lessThan: 60, // 1 minute
  every: 30 // 30 seconds
},
{
  lessThan: 30, // 30 seconds
  every: 10 // 10 seconds
},
{
  lessThan: 10, //10 seconds
  every: 1 // every second
}
```

If given a date that is **10 minutes and 20 seconds** into the future, it would call a function:
- instantly
- T-10 minutes
- T-9 minutes
- ... *every minute*
- T-1 minute
- T-30 seconds
- T-20 seconds
- T-10 seconds
- T-9 seconds
- ... *every second*
- T-2 seconds
- T-1 second

I can't find a package that will allow me to do this for me, so that's why I am typing this now.