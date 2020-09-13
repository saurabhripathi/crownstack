// acton creaters//

import * as actionTypes from '../../../action-types'

export const fetchLocation = ()=>{
    return{
        type : actionTypes.FETCH_LOCATION
    }
}

export const fetchCategoryByBranch = (value)=>{
    return{
        type: actionTypes.FETCH_CATEGORY_BY_BRANCH,
        payload : value
    }
}

export const fetchCategoryByLocation = (value)=>{
    return{
        type: actionTypes.FETCH_CATEGORY_BY_LOCATION,
        payload : value
    }
}

export const fetchSubCategory = (value)=>{
    return{
        type: actionTypes.FETCH_SUBCATEGORY,
        payload : value
    }
}
