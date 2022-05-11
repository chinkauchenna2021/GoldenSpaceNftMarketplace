import React from 'react'

export const Fetching = async (url)=>{

const datas=    await fetch(url);
const true_data = await datas.json();
return true_data;
}