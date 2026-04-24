import express from "express";
import session from "express-session";
import passport from "./config/passport.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ???????????? ?????
app.use(session({
    secret: "secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: false } // secure: true ?????? ??? HTTPS
}));

// ????????????? Passport
app.use(passport.initialize());
app.use(passport.session());

// ??????? ??? ??????? ?????????
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.status(401).send("Unauthorized: Please login first");
};

// ????????
app.get("/", (req, res) => res.send("<h1>Home</h1><a href=\"/login\">Login</a>"));

app.post("/login", passport.authenticate("local", {
    successRedirect: "/protected",
    failureRedirect: "/login"
}));

app.get("/login", (req, res) => {
    res.send("<form action=\"/login\" method=\"POST\">" +
             "<input name=\"email\" placeholder=\"email\" />" +
             "<input name=\"password\" type=\"password\" />" +
             "<button type=\"submit\">Login</button></form>");
});

app.get("/protected", isAuthenticated, (req, res) => {
    res.send(`Welcome, user ID: ${req.user.id}. This is a protected route! <br> <a href="/logout">Logout</a>`);
});

app.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect("/");
    });
});

app.listen(3000, () => console.log("Passport Server: http://localhost:3000"));
