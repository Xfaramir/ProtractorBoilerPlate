# Use an official Python runtime as a parent image
FROM node:6.9.4-slim

# Set the working directory to /app
WORKDIR /Users/jbarrera/Desktop/Learning/HugeAutomation

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World