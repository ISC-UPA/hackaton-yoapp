import authService from "../modules/auth/auth.service.js";

const guard = (req, res, next) => {

    const header = req.headers["authorization"];

    if (!header) return res.status(401).json({ error: "Unauthorized" });

    try {

        const decodedToken = authService.validateToken(token);

        if (!decodedToken) return res.status(401).json({ error: "Unauthorized" });

        req.userId = decodedToken.data.sub;

        next();
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized" });
    }
};

export default guard;