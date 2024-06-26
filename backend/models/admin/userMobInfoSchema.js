/**
 * @author Dennis Wang
 * @email devmaster@drapefit.com
 * @company Drape Fit Inc.
 */
import mongoose from 'mongoose';

const userMobInfoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    platform: {
      type: String,
      enum: ['ios', 'android', 'mobileweb']
    },
    udid: {
      type: String
    },
    deviceToken: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default userMobInfoSchema;
