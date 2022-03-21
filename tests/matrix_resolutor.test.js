const resolutor = require('../matrix_resolutor');

test('passTest', () =>
{
    // const matrix = 
    // [
    //     [2, -3, 1], 
    //     [-3, 5, 7], 
    //     [1, 7, -1]
    // ];
    const matrix = 
    [
        [8,-7,0,43,21],
        [23,98,-16,3,17],
        [-1,-13,14,65,81],
        [23,-23,25,100,87],
        [45,-136,97,8,2]
    ];
    let result = resolutor.resolve_matrix(matrix);
    expect(result).toBe(13702423);
})