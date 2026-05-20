/* eslint-disable no-useless-catch */
import conf from "../conf/conf.js";
import { Client, ID, Storage, Databases, Query } from "appwrite";

export class AppwriteService {
  client = new Client();
  databases;
  storage;

  constructor() {
    // Initialize Appwrite client
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  // Create a new post
  async createPost({ title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(), // Generate unique document ID
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      );
    } catch (error) {
      console.log("Error creating post:", error);
      throw error;
    }
  }

  // Update an existing post
  async updatePost(postId, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId, // Existing document ID required
        {
          title,
          content,
          featuredImage,
          status,
        },
      );
    } catch (error) {
      console.log("Error updating post:", error);
      throw error;
    }
  }

  // Post delete
  async deletePost(postId) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId,
      );
    } catch (error) {
      console.log("Error deleting post:", error);
      throw error;
    }
  }

  // get document
  async getPost(postId) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId,
      );
    } catch (error) {
      console.log("Error fetching post:", error);
      throw error;
    }
  }

  // get active post
  async getActivePosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      );
    } catch (error) {
      console.log("Error fetching active posts:", error);
      throw error;
    }
  }

  // file upload services
  async uploadFile(file) {
    try {
      const fileId = ID.unique();
      const response = await this.storage.createFile(
        conf.appwriteBucketId,
        fileId,
        file,
      );
      
      return response;
    } catch (error) {
      console.log("Error uploading file:", error);
      throw error;
    }
  }

  // file delete services
  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Error deleting file:", error);
      throw error;
    }
  }

 
 getFilePreview(fileId) {
    return this.storage.getFileView(
      conf.appwriteBucketId, 
      fileId
    );
  }

  // get file download url - assignment 
}

const service = new AppwriteService();
export default service;