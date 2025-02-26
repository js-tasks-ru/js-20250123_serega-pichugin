/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    let newArr = arr.slice();
    if(Array.isArray(arr)){
        if(param === 'asc'){
            return newArr.sort((a, b) => a.localeCompare(b, ['ru', 'en'], { caseFirst: 'upper' }));
        } else if (param === 'desc') {
            return newArr.sort((a, b) => b.localeCompare(a, ['ru', 'en'], { caseFirst: 'upper' }));
        }
        else {
            alert('Направильно задан порядок сортировки')
        }
    } else {
        alert('Первое свойство функции sortStrings не является массивом');
    }
}
