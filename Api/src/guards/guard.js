import authService from "../modules/auth/auth.service.js";

const guard = async (req, res, next) => {

    const header = req.headers["authorization"];
    
    if (!header) return res.status(401).json({ error: "Unauthorized" });

    try {

        const decodedToken = authService.validateToken(header);

        if (!decodedToken) return res.status(401).json({ error: "Unauthorized" });

        req.body.phoneNumber = decodedToken.data.sub.toString();
        console.log("Decoded token:", req.body.phoneNumber);
        next();
    } catch (error) {
        console.error("Error in guard middleware:", error);
        return res.status(401).json({ error: "Unauthorized" });
    }
};

export default guard;