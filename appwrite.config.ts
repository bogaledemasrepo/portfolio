import { Databases, ID, Client, Query, Storage } from "appwrite";

const client = new Client();
const database = new Databases(client);
const storage = new Storage(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67c017a2001fbd33280a");
export async function addProject(project: {
  title: string;
  description: string;
  sourceCodeLink: string;
  previewLink: string;
  thumbnail: string;
}) {
  try {
    const result = await database.createDocument(
      process.env.APPWRITE_PROJECTS_DATABASE_ID!,
      process.env.APPWRITE_PROJECTS_COLLECTION_ID!,
      ID.unique(),
      project
    );
    return { success: true, data: result, error: null };
  } catch (error) {
    return { success: false, data: null, error: error };
  }
}

export async function getProjects(title?: string) {
  try {
    const result = await database.listDocuments(
      process.env.APPWRITE_PROJECTS_DATABASE_ID!,
      process.env.APPWRITE_PROJECTS_COLLECTION_ID!,
      title ? [Query.equal("title", title)] : []
    );
    return { success: true, data: result, error: null };
  } catch (error) {
    return { success: false, data: null, error: error };
  }
}
export async function updateProject(documentId: string) {
  try {
    const result = await database.updateDocument(
      process.env.APPWRITE_PROJECTS_DATABASE_ID!,
      process.env.APPWRITE_PROJECTS_COLLECCTION_ID!,
      documentId,
      {}
    );
    return { success: true, data: result, error: null };
  } catch (error) {
    return { success: false, data: null, error: error };
  }
}
export async function deleteProject(documentId: string) {
  try {
    const result = await database.updateDocument(
      process.env.APPWRITE_PROJECTS_DATABASE_ID!,
      process.env.APPWRITE_PROJECTS_COLLECCTION_ID!,
      documentId
    );
    return { success: true, data: result, error: null };
  } catch (error) {
    return { success: false, data: null, error: error };
  }
}

export async function uploadTubnail(fileId: string, file: File) {
  const upload = await storage.createFile(
    process.env.APPWRITE_TEBNAIL_BUCKET_ID!, // bucketId
    fileId, // fileId
    file // file,
  );
  return `https://cloud.appwrite.io/v1/storage/buckets/${process.env.APPWRITE_TEBNAIL_BUCKET_ID}/files/${fileId}/view?project=${process.env.APPWRITE_PROJECT_ID}
`;
}

export async function getTubnail(fileId: string) {
  await storage.getFile(
    process.env.APPWRITE_TEBNAIL_BUCKET_ID!, // bucketId
    fileId // fileId
  );
}

export async function deleteTubnail(fileId: string) {
  await storage.deleteFile(
    process.env.APPWRITE_TEBNAIL_BUCKET_ID!, // bucketId
    fileId // fileId
  );
}
