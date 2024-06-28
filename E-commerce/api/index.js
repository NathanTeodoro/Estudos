import  express  from 'express'

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://fubzbrxxtndoigztdpld.supabase.co'
const supabaseKey = 'a-SpA@Z4SbQ-#@J'
const api_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1Ynpicnh4dG5kb2lnenRkcGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyNTAzNjksImV4cCI6MjAzMDgyNjM2OX0.EU8DlFkge_-NuAe_1O5lTJAa5cnOvdj75dVgiXtOM3Y'
const supabase = createClient(supabaseUrl, api_key)
const app = express()
//let { error } = await supabase
//  .from('countries')
//  .insert({ id: 1, name: 'Denmark' })


app.get('/products', async (req, res) => {

    async function getTodos() {
        let { data , error } = await supabase
        .from('Produtos')
        .select()
        .lt('id',4)
        return data
      }
      
      getTodos().then((data) => { 
        console.log(data)
        
        res.send("data e : " + data)
      })

})


app.listen(3000, () => {
    console.log(`> pronto http://localhost:3000`);
});

