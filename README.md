# Making the china copy of the website using the Tailwind css

- First creating the Navbar by my own logic using the tailwind css.

## Tailwind css

- flex - It is necessary to apply the flex property before implementing the other properties.
- item-center - items are vertically centerized.
- justify-center - items are horizontally centerized.
- Responsive ke liye hm hmesha ulti logic deinge by default jo bhi hai rhne deinge hm phr sm,md,lg ki logic deinge
- flex-wrap se aik flex mein wrap krdega
- min-h-screen - its the minimum height of the screen

### JIT (just in time)

- tailwind mode jit coming in

## animations in css - created the animations using the keyframes

- call the animation
  .card {
  animation: appear 2s ease forwards;
  transform: translateY(100px);
  }

- created the animation
  @keyframes appear {
  0% {
  transform: translateY(100px);
  opacity: 0;
  }
  50% {
  transform: translateY(200px);
  opacity: 0.5;
  }
  100% {
  transform: translateY(0px);
  opacity: 1;
  }
  }
