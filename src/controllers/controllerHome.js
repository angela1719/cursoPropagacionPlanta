module.exports = {
    index: (req, res) => {
        res.render('./home/home')
    },
    introd: (req, res) => {
        res.render('./home/introduccion')
    },
    objetivos: (req, res) => {
        res.render('./home/objetivos')
    },
    objetivosE: (req, res) => {
        res.render('./home/objetivosE')
    },
    unidad1: (req, res) => {
        res.render('./home/unidadUno')
    },
    diap8: (req, res) => {
        res.render('./home/diaOcho')
    },
    diap9: (req, res) => {
        res.render('./home/diaNueve')
    },
    diap10: (req, res) => {
        res.render('./home/diaDiez')
    },
    diap11: (req, res) => {
        res.render('./home/diaOnce')
    },
    diap12: (req, res) => {
        res.render('./home/diaDoce')
    },
    diap13: (req, res) => {
        res.render('./home/diaTrece')
    },
    diap14: (req, res) => {
        res.render('./home/diaCatorce')
    },
    aparea: (req, res) => {
        res.render('./home/apareamiento')
    },
    rompecabeza: (req, res) => {
        res.render('./home/rompecabezas')
    },
    dragandDrop: (req, res) => {
        res.render('./home/dragandDrop')
    },
    dragandDropS: (req, res) => {
        res.render('./home/dragAndDropSelectivo')
    },
}