import { Router } from 'express'

const router = Router()

router.get('/', function(req, res) {
  res.render('index', { title: 'Nicholas Bailey' })
})

router.get('/about', function(req, res) {
  res.render('about', { title: 'About Me' })
})

router.get('/work', function(req, res) {
  res.render('work', { title: 'Work' })
})

router.get('/resume', function(req, res) {
  res.render('resume', { title: 'Resume' })
})

router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact Me' })
})


export { 
  router
}
