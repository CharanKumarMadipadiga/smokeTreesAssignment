const { v4: uuidv4 } = require('uuid');

const registerController = async (req, res, db) => {
  const { name, door_no, street, city, pin_code } = req.body;

  if (!name || !door_no || !street || !city) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const userId = uuidv4();
  const addressId = uuidv4();

  try {
    // Insert user
    await db.run(
      `INSERT INTO User (id, name) VALUES (?, ?)`,
      [userId, name]
    );

    // Insert address linked to user
    await db.run(
      `INSERT INTO Address (id, door_no, street, city, pin_code, user_id) VALUES (?, ?, ?, ?, ?, ?)`,
      [addressId, door_no, street, city, pin_code || null, userId]
    );

    res.status(201).json({ message: 'User and address registered successfully' });

  } catch (error) {
    console.error('Error registering user and address:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



const getAllUsersController = async (req, res, db) => {
  try {
    const getUsersQuery = `SELECT * FROM User`;
    const users = await db.all(getUsersQuery)

    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }

    res.status(200).json(users);

  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { registerController, getAllUsersController };
