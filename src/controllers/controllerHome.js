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

}