exports.home = async(req, res, next) => {
    res.json('Redirecting to login page');
}

exports.register = async(req, res, next) => {
    let userData = req.body;
    
    console.log("post start register")

    try {
        
    } catch (errpr) {
        next(error)
    }

    const emailExist = await User.findOne({email: userData.email});
    if (emailExist) return res.status(400).send("Email already exist!");

    // hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create a new user
    const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword
    });

    // save to the db
    newUser.save()
        .then((registeredUser) => {
            let payload = { subject: registeredUser.id};
            let token = jwt.sign(payload, SECRET_KEY);
            res.status(200).send({token, username: registeredUser.username, email: registeredUser.email, userId: registeredUser.id});
        })
        .catch((error) => {console.log(error); res.status(400).send(error)});
    
    
}