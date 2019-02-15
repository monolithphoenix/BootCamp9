const expect = require('chai').expect;
const hello = require('../app').hello;
const reduceFunc = require('../app').reduceFunc;

describe('hello_func', function() {
    it('show hello', function () {
        const result = hello();
        expect(result).to.be.a('string');
        expect(result).equals('hello')
    })
});

  
describe('redused', function() {            // тест('имя_теста', функция(){
    it('emptyArr', function() {             // проверка('имя_проверки', функция(){
        const result = reduceFunc([]);      // const result = имя_связующей_константы(аргумент_для_проверки);
        expect(result).to.be.a('number');   // проверка на тип
        expect(result).equal(0);            // проверка на результат, выдаваемый функцией
    });
    it('oneArr', function() {
        const result = reduceFunc([5]);
        expect(result).to.be.a('number');
        expect(result).eqls(5);
    });
    it('longArr', function() {
        const result = reduceFunc([1,2,3]);
        expect(result).to.be.a('number');
        expect(result).eql(6);
    });
    it('notArr', function() {
        const result = reduceFunc(7);
        expect(result).to.be.a('boolean');
        expect(result).eq(false);
    });
});