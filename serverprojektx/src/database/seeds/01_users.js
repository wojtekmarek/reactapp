/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 const bcrypt=require('bcrypt')
 exports.seed = async function(knex) {
   // Deletes ALL existing entries 
  /* await knex('table_name').del()
   await knex('table_name').insert([
     {id: 1, colName: 'rowValue1'},
     {id: 2, colName: 'rowValue2'},
     {id: 3, colName: 'rowValue3'}
   ]);*/
   return knex('users').insert([{username: 'wojtek',password: bcrypt.hashSync('12345',8),email:'przykładowy@dat.com'}])
 };