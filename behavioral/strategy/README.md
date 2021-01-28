# Strategy design pattern - Object behavioral

## The problem

## The solution

## Why this soluiton

## Code

It's a very simple pattern
- Using composition rather than inheritance[^1]
    - it's about understanding inheritance is not intended for code reuse

Decouple the algorithm (strategy) from the one using the algorithm[^2]

Using STRATEGY PATTERN to
> Isolate strategy for getting current locale data from db data type that includes multiple locale strings

[^1]: Composition over inheritance principle  
[^2]: Loose coupling (principle)

### Code Walkthrough


### How to run the code - `strategy.ts`

```
npx ts-node behavioral/strategy/strategy.ts
```

#### You may need to install

```
npm install -g typescript
npm install -g ts-node
```
