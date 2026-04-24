import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

// ???????? ???? ?????
const users = [{ id: 1, email: "test@test.com", password: "123" }];

passport.use(new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    const user = users.find(u => u.email === email);
    if (!user) return done(null, false, { message: "User not found" });
    if (user.password !== password) return done(null, false, { message: "Wrong password" });
    return done(null, user);
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
    const user = users.find(u => u.id === id);
    done(null, user);
});

export default passport;
