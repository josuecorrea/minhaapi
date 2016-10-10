
module.exports = app => {
    const Tasks = app.db.models.Tasks;
    app.route("/tasks")
        .all((req, res, next) => {
            delete req.body.id;
            next();
        })
        .get((req,res) => {

        })
        .post((req,res) => {

        });
    app.route("/tasks/:id")
        .all((req, res, next) => {
            delete req.body.id;
            next();
        })
        .get((req,res) => {

        })
        .put((req,res) => {

        })
        .delete((req,res) => {

        });        
};