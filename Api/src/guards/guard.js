import authService from "../modules/auth/auth.service.js";

const guard = async (req, res, next) => {

    const header = req.headers["authorization"];
    
    if (!header) return res.status(401).json({ error: "Unauthorized 1" });

    try {

        const decodedToken = authService.validateToken(header);

        if (!decodedToken) return res.status(401).json({ error: "Unauthorized 2" });

        //req.phoneNumber = decodedToken.data.sub;

        next();
    } catch (error) {
        console.error("Error in guard middleware:", error);
        return res.status(401).json({ error: "Unauthorized 3" });
    }
};

export default guard;