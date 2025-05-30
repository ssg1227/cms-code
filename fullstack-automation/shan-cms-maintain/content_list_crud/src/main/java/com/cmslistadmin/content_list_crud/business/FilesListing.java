package com.cmslistadmin.content_list_crud.business;

import java.io.File;
import java.nio.file.Files;
import java.util.ArrayList;

import org.springframework.boot.autoconfigure.amqp.ConnectionFactoryCustomizer; 

public class FilesListing {
    public String[] getFileListing(String folderName) {
        String[] fileNames = null ;
            
        File folderToList = new File(folderName) ;
        File contentsFile[] = folderToList.listFiles();
        if (contentsFile != null && contentsFile.length > 0 ){
            int k = contentsFile.length;
            fileNames = new String[k];
            for (int i = 0 ; i < contentsFile.length; i++)
            {
                if (contentsFile[i].isDirectory()) {
                    fileNames[i] =   contentsFile[i].getName();
                } else {
                    fileNames[i] =   "(file)" + contentsFile[i].getName();
                    
                }
            }
        } 
        return fileNames ;
    }
    public boolean moveFile(String sourcePath,String targetPath, String sourceFileName, String destFileName ) {
        if (destFileName == "") {
            destFileName = sourceFileName ;
        }
        System.out.printf("%s\n/Users/shantanu/Downloads/Sketch-transit-test/GaneshDec72023.jpeg   ",sourcePath + "/" + sourceFileName);
        System.out.printf("%s\n/Users/shantanu/Documents/GitHub/ssg1227-GuruDatta-9-test/cms-code/art-is-worship/src/assets/gallery-files/images//religion/aumkar-shree-ganesh/gte-q1-2023/GaneshDec72023.jpeg   TO \n",targetPath + "/" + destFileName);
         File fileToMove = new File(sourcePath + "/" + sourceFileName);
         // File fileToMove = new File("/Users/shantanu/Downloads/Sketch-transit-test/GaneshDec72023.jpeg") ;
      /* boolean fileMoved = fileToMove.renameTo(new File(targetPath + "/" + destFileName));*/
       // boolean fileMoved = fileToMove.renameTo(new File( "//Users/shantanu/Documents/" + destFileName));
       boolean fileMoved = false ;
       try {
        fileMoved = fileToMove.renameTo(new File(targetPath + "/" + destFileName));
        // fileMoved = fileToMove.renameTo(new File("/Users/shantanu/Documents/GitHub/ssg1227-GuruDatta-9-test/cms-code/art-is-worship/src/assets/gallery-files/images//religion/aumkar-shree-ganesh/gte-q1-2023/GaneshDec72023.jpeg") );
     }
    catch(Exception e) {
      //  Block of code to handle errors
      System.out.println(e.getMessage()); 
      e.printStackTrace();
      System.out.printf("error %s\n", e.getMessage());
    }
     
        
        return fileMoved;
    }

    public boolean moveFileTest(String sourcePath,String targetPath, String sourceFileName, String destFileName ) {
        if (destFileName == "") {
            destFileName = "/Users/shantanu/Documents/test2/EDunsigned4NarasimhaSaraswatiJan152021.png";// sourceFileName ;
        }
        destFileName = "/Users/shantanu/Documents/test2/GuruInBayArea051024.jpeg";// sourceFileName ;
        
        File fileToMove = new File("/Users/shantanu/Documents/test1/GuruInBayAreaWithGanesh051024.jpeg"); // sourcePath + "/" + sourceFileName);
       
      /* boolean fileMoved = fileToMove.renameTo(new File(targetPath + "/" + destFileName));*/
       // boolean fileMoved = fileToMove.renameTo(new File( "//Users/shantanu/Documents/" + destFileName));
       boolean fileMoved = false ;
       try {
        fileMoved = fileToMove.renameTo(new File( destFileName));
        System.out.printf("%s XXXXX %s YYYYY %s %s", sourcePath, targetPath, sourceFileName,destFileName);
    }
    catch(Exception e) {
      //  Block of code to handle errors
      System.out.println(e.getMessage()); 
      e.printStackTrace();
    }
       System.out.printf("%s XXXXX %s YYYYY %s %s", sourcePath, targetPath, sourceFileName,destFileName);
        
        return fileMoved;
    }
    public boolean writeLines(String[] fileAndLines){
        String fileName = fileAndLines[0];
        ArrayList<String> fileLines = new ArrayList<String>();
        for (int i = 1; i < fileAndLines.length ;i++) {
            fileLines.add(fileAndLines[i]);
        }
        FileHandler.addLinestoFile(fileName, fileLines, -1);
        return true ;
    }
    public boolean createFolder(String folderPath){
        File directory = new File(folderPath);
        System.out.println(folderPath);
        // Create the directory
        if (!directory.exists()) {
            boolean created = directory.mkdirs(); // Use mkdir() for single directory, mkdirs() for multiple levels
            if (created) {
                System.out.println("Directory created successfully.");
            } else {
                System.out.println("Failed to create the directory.");
            }
        } else {
            System.out.println("Directory already exists.");
        }
        return true ;
    }
    public boolean createFile(String filePath){
        File newFile = new File(filePath);
        System.out.printf(" Creating %s\n", filePath);
        boolean created = true ;
        // Create the directory
        if (newFile.exists()) 
        {
            System.out.println("File exists");
            return false ;
        } else {
            try {
                // Create the file
                if (newFile.createNewFile()) {
                    System.out.println("File created successfully.");
                    
                } else {
                    System.out.println("File already exists.");
                    created = false ;
                }
            } catch (Exception e) {
                System.out.println("An error occurred while creating the file.");
                e.printStackTrace();
                created = false ;
            }
        }
        return created ;
    }
}
