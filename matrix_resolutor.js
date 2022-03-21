function do_submatrix(given_matrix, key)
{
    debugger;
    let submatrix = JSON.parse(JSON.stringify(given_matrix));
    submatrix.splice(0,1);
    for(i=0; i<submatrix.length;i++)
    {
        for(let subkey in submatrix[i])
        {
            if(subkey === key)
            {
                submatrix[i].splice(Number(key), 1);
            }
        }
    }
    return submatrix;
}
function resolve_2x2_matrix(given_matrix)
{
    return ((given_matrix[0][0])*(given_matrix[1][1]) - (given_matrix[0][1])*(given_matrix[1][0]));
}
function resolve_matrix(given_matrix)
{
    debugger;
    let constant_matrix = given_matrix;
    let matrix_length = constant_matrix.length;
    if(matrix_length == 2)
    {
        return (resolve_2x2_matrix(given_matrix))
    }
    else
    {   
        let constraint = 0;
        for(i=0; i<matrix_length; i++)
        {
            let matrix_develop = given_matrix[0];
            let elevated = 0;
            for(let key in matrix_develop)
            {
                let submatrix = do_submatrix(given_matrix, key)
                debugger;
                elevated++;
                constraint += matrix_develop[key] * Math.pow(-1, 1 + elevated) * resolve_matrix(submatrix);
            }
        }
        return constraint;
    }
}
module.exports = {resolve_matrix}