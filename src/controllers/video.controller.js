import { getConnection } from "./../database/database.js";

const getVideos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM videos;");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM videos WHERE id = ?;", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addVideo = async (req, res) => {
    try {
        const { video_name,url,duration, views_number, video_type} = req.body;

        if (video_name === undefined || url === undefined || duration === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const video = { video_name, url, duration, views_number, video_type};
        const connection = await getConnection();
        await connection.query("INSERT INTO videos SET ?", video);
        res.json({ message: "video added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const { video_name,url,duration, views_number, video_type} = req.body;

        if (id === undefined || video_name === undefined || url === undefined || duration === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const video = { video_name, url, duration, views_number, video_type};
        const connection = await getConnection();
        const result = await connection.query("UPDATE videos SET ? WHERE id = ?", [video, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM videos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
//adicionales
const getVideoByName = async (req, res) => {
    try {
        const {name} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM videos WHERE video_name LIKE ?;", ['%' + name + '%']);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getCountTotalVideos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT count(*) as total_videos  FROM videos;");
        res.json({"Total de videos": result[0].total_videos});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getVideos,
    getVideo,
    addVideo,
    updateVideo,
    deleteVideo,
    getVideoByName,
    getCountTotalVideos
};