'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por 
todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  //factorial de n = n*n-1
  if(n<1){
    return 1
  } else{
    return n * nFactorial(n-1)
  }
}

function nFibonacci(n) {
    if(n === 1){ 
      return 1
    } else if(n === 0){
      return 0
    } else {
      return nFibonacci(n-1) + nFibonacci(n-2)
    } 
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden. ES UN PUSH
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía. ES UN SHIFT.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

/*function Queue() {
  this.size = 0;
  this.data = {};
    //metodo enqueue
    Queue.prototype.enqueue = function(value){
      if(this.size === 0){
        this.data[0] = value;
      } else{
        this.data[this.size+1] = value;
      }
      ++this.size;
    }

    Queue.prototype.dequeue = function(value){}
    
    Queue.prototype.size = function(){
      return this.size;
    }
  }*/

  /*function Queue() { 

      this.size = 0;
      this.data = {}
      this.enqueue = enqueue;
      this.dequeue = dequeue;
    
    function enqueue(value) {
      if(this.size === 0){
        this.data[0] = value;
      } else{
        this.data[this.size+1] = value;
      }
      ++this.size;
    }

    function dequeue(){ //Tiene que borrar el primer elem de la queue
      if(this.size === 0){
        return undefined
      } else{
        this.data[0] = this.data[1]
        --this.size;
      }
    }
    
    function size(){
      return this.size; 
    }
  }*/

  class Queue { 
    constructor(){
      this.queue = []; 
      this.queue.size = 0;
    }
    enqueue(element){
      this.queue.push(element);
      return this.queue;  
    }
    dequeue(){
      return this.queue.shift();
    }
    size(){
      return this.queue.length;
    }
  }  

  var newQueue = new Queue();
  newQueue.enqueue('Hola')

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
