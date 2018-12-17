# Mars Rover Navigator

A command line application, built with NodeJS, that helps to navigate two rovers over an marcian plateau.


## Getting Started

### Prerequisites
* NodeJS v10

### Installing Dependencies

```sh
$ npm install
```
### Running Unit Tests
```sh
$ npm test
```

### Running Application
```sh
$ npm start
```

The application take 3 diferent parameter to calculate the new rover position over the marcian plateau.

The first parameter is the upper-right plateau coordenates. We assume that the lower-left coordenates are 0,0.

The second parameter is the rover coordenates over the plateaou and the rover headind. The allowed heading values are N, S, E, W.

The third parameter is the instructions to navigate the rover. The allowed instructions are:
* L -> turn the rover left
* R -> turn the rover right
* M -> move the rover forward

#### Example
Input
```
Plateau:5 5
Rover1 Landing:1 2 N
Rover1 Instructions:LMLMLMLMM
Rover2 Landing:3 3 E
Rover2 Instructions:MMRMMRMRRM
```

Output:
```
Rover1:1 3 N
Rover2:5 1 E
```


