/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    const searchFields = [...fields];
    const newObj = {};
    for (const [key, value] of Object.entries(obj)){
        if(searchFields.includes(key)){
            newObj[key] = value;
        }
    }
    return newObj;
};
