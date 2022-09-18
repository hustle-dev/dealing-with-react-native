import firestore from '@react-native-firebase/firestore';

const postCollection = firestore().collection('posts');

export function createPost({user, photoURL, description}) {
  return postCollection.add({
    user,
    photoURL,
    description,
    createdAt: firestore.FieldValue.serverTimestamp(),
  });
}
