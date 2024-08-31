module.exports = mongoose => {
    const schema = new mongoose.Schema({
      name: String,
      nohp: Number, // Consider using String if phone numbers can contain letters (e.g., extensions)
      alamat: String,
      email: String,
      username: String,
      password: String, // Consider using a dedicated password hashing library like bcrypt
    });
  
    // Virtual field for 'id' (optional, depending on frontend needs)
    schema.virtual('id').get(function () {
      return this._id.toString();
    });
  
    // Set toJSON options to include virtuals by default
    schema.set('toJSON', { virtuals: true });  // Ensures 'id' is included
  
    const Staff = mongoose.model("staff", schema); // Corrected model name
    return Staff;
  };