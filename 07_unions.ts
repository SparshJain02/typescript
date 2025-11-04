function getDbId(id: number | string){ // "|" is used to give choice that our argument can be either number or string or whatsover depends on usecase

    // now if i do like
    // id.toUpperCase(); // it throws error that you can't perform this operation on number | string , bcz  it's treating this  as different entity so to fix this


    if(typeof id === "string"){
        id = id.toUpperCase();
    }
    else{
        id+=2;
    }

}
getDbId(2);
getDbId("bankai");