// @ts-nocheck
import { task1IncrementCounter, task2FilterEven, task3FilterAdults, task4MultiplyArray, task5GetPersonNames } from './week4';

// Tests for all functions importen from week4.ts
describe('Week 4 Assignment Tests', () => {
  describe('Task 1 - Increment counter', () => {
    it('should increment the counter', () => {
      expect(task1IncrementCounter(1)).toBe(2);
      expect(task1IncrementCounter(2)).toBe(3);
      expect(task1IncrementCounter(3)).toBe(4);
    });
  });

  describe('Task 2 - Filter even numbers', () => {
    it('should return an array of even numbers', () => {
      expect(task2FilterEven([1, 2, 3, 4, 5])).toEqual([2, 4]);
      expect(task2FilterEven([2, 4, 6, 8, 10])).toEqual([2, 4, 6, 8, 10]);
      expect(task2FilterEven([1, 3, 5, 7, 9])).toEqual([]);
    });
  });

  describe('Task 3 - Filter adults', () => {
    it('should return an array of adults', () => {
      expect(task3FilterAdults([{ name: 'John', age: 20 }, { name: 'Jane', age: 15 }])).toEqual([{ name: 'John', age: 20 }]);
      expect(task3FilterAdults([{ name: 'John', age: 20 }, { name: 'Jane', age: 25 }])).toEqual([{ name: 'John', age: 20 }, { name: 'Jane', age: 25 }]);
      expect(task3FilterAdults([{ name: 'John', age: 15 }, { name: 'Jane', age: 15 }])).toEqual([]);
    });
  });

  describe('Task 4 - Multiply array', () => {
    it('should return an array of multiplied numbers', () => {
      expect(task4MultiplyArray([1, 2, 3, 4, 5], 2)).toEqual([2, 4, 6, 8, 10]);
      expect(task4MultiplyArray([2, 4, 6, 8, 10], 3)).toEqual([6, 12, 18, 24, 30]);
      expect(task4MultiplyArray([1, 3, 5, 7, 9], 6)).toEqual([6, 18, 30, 42, 54]);
    });
  });

  describe('Task 5 - Get person names', () => {
    it('should return an array of person names', () => {
      expect(task5GetPersonNames([{ name: 'John', age: 20 }, { name: 'Jane', age: 15 }, { name: 'Max', age: 55 }])).toEqual(['John', 'Jane', 'Max']);
      expect(task5GetPersonNames([{ name: 'John', age: 20 }, { name: 'Jane', age: 25 }])).toEqual(['John', 'Jane']);
      expect(task5GetPersonNames([{ name: 'David', age: 15 }, { name: 'Bill', age: 15 }, { name: 'Dexter', age: 25 }, { name: 'Susan', age: 67 }])).toEqual(['David', 'Bill', 'Dexter', 'Susan']);
    });
  });
});
