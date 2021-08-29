// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, ChatRoom, ChatRoomUsers, Users } = initSchema(schema);

export {
  Message,
  ChatRoom,
  ChatRoomUsers,
  Users
};