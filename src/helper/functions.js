import React from 'react'

export default function makeUniqueId(length) {
    var result="";
    var characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    var characterslenght=characters.length;
    for(var i=0;i<length;i++)
    {
       result+=characters.charAt(Math.floor(Math.random()*characterslenght));
    }
    return result;
}
