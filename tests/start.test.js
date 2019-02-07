'use strict';

test('test_string', () => {
    let string = 'I cant understand what to do here';
    let string1 = "But maybe later I will";
    expect(string.includes('Heavy metal')).toEqual(false);
    expect(string1.endsWith("will")).toEqual(true);
    expect(string1.startsWith('But')).toEqual(true);
});

test('test_numbers', () => {
    expect(Number.isNaN(18)).toEqual(false);
    expect(125/5).toEqual(25);
    expect(19 + '94').toEqual('1994');
});

test('test_arrays', () => {
    let textArr = ["Japan", "Sakura", "Loli", "Anime"];
    let numberArr = [19, 24, 5, 1];
    expect(textArr[2]).toEqual('Loli');
    expect(numberArr.length).toEqual(4);

    textArr.pop();
    expect(textArr.length).toEqual(3);

    numberArr.shift();
    expect(numberArr[1]).toEqual(5);
});

test('test_compare_operators', () => {
    let a = 2;
    let b = 5;
    expect(2 + 5).toEqual(7);
    expect(5*2 + 5).toEqual(15);
    expect(a > b).toEqual(false);
    expect(b -= a).toEqual(3);
    expect(a != b).toEqual(true);
});

test('test_equality_comparison_algorithm', () => {
    expect(10 > 0).toEqual(true);
    expect('a' + 100 + 2).toEqual('a1002');
    expect('Hard '+'Rock').toEqual('Hard Rock');
});
