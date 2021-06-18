const express = require('express');
const { Blog } = require('./db')
const routes = express.Router()
         
routes.get('/', async (req, res)=>{
    const blogs = await Blog.findAll(req.body,
        {
            attributes: [
                'id',
                'title',
                'img',
                'createdAt'
            ],
            order: [['createdAt', 'DESC']]
        });
        if(blogs){
            res.json(blogs)
        }else
        {
            res.json({
                error: 'no se encontraron registros'
            })
        }
        }
                 
)

routes.get('/:id', async (req, res)=>{
    const blogs = await Blog.findAll({
        where:{id:req.params.id}
    })
    if(blogs){
        res.json(blogs)
    }else
    {
        res.json({
            error: 'no se encontraron registros'
        })
    }
    })

routes.post('/', async (req, res)=>{
    const blogs = await Blog.create(req.body);
                res.json(blogs)                
})

routes.delete('/:id', async (req, res)=>{
    
    const blogs = await Blog.findAll({
        where:{id:req.params.id}
    })
   
    if(!blogs){
        return res.json({
            error: 'el registro no se encontro'
        });
    }
      Blog.destroy({
        where:{id:req.params.id}
    })
              res.json({success: 'se borro el registro correctamente' })
    })



routes.patch('/:id', async (req, res)=>{
   await Blog.patch({
     where:{id:req.params.id}
     })
      res.json({success: 'se modidico el registro correctamente' })
    })



module.exports = routes

