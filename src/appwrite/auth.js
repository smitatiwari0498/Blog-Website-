/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-catch */

import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  // Create new account
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      return userAccount;
    } catch (error) {
      console.log("Create account error:", error);
      throw error;
    }
  }

  // Login user
  async login({ email, password }) {
    try {
      // Remove existing session before creating a new one
      try {
        await this.account.deleteSessions();
      } catch (sessionError) {
        console.log("No active sessions found");
      }

      return await this.account.createEmailPasswordSession(
        email,
        password
      );
    } catch (error) {
      console.log("Login error:", error);
      throw error;
    }
  }

  // Get currently logged in user
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("User not logged in");
      return null;
    }
  }

  // Logout current user
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Logout error:", error);
    }
  }
}

const authService = new AuthService();

export default authService;