const resolutor = require('../matrix_resolutor');

test('Resolve example matrix', () =>
{
    let expected = 42;

    const matrix =
    [
        [3, -3, 3],
        [3, 8, -4],
        [9, 4, 2]
    ]
    let result = resolutor.resolve_matrix(matrix);
    expect(result).toBe(expected);
})

test('Resolve larger matrix', () =>
{
    let expected = 13702423;

    const matrix = 
    [
        [8,-7,0,43,21],
        [23,98,-16,3,17],
        [-1,-13,14,65,81],
        [23,-23,25,100,87],
        [45,-136,97,8,2]
    ];
    let result = resolutor.resolve_matrix(matrix);
    expect(result).toBe(expected);
})