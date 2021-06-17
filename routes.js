const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM movimientos', (err, rows)=>{
            if(err) return res.send(err)
            else{

                res.json(rows)                
            }
        
        })
    })
})



routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO movimientos set ?', [req.body], (err, rows)=>{
          
            if(err) return res.send(err)

            res.send('Movimiento guardado')
        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM movimientos WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Movimiento Borrado!!')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE movimientos set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Movimiento Guardado!')
        })
    })
})



routes.put('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT movimientos set ? WHERE tipo = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)            

        })
    })
})


routes.get('/tipo', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM movimientos where tipo = "Egreso";', (err,rows)=>{
            if(err) return res.send(err)
            else{

                res.json(rows) 
            }
        
        })
    })
})


module.exports = routes