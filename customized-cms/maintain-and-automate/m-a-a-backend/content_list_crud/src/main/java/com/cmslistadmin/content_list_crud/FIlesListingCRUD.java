package com.cmslistadmin.content_list_crud;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.RestController;
import com.cmslistadmin.content_list_crud.business.FilesListing;
import com.cmslistadmin.content_list_crud.business.FilesListingJSON;
import com.cmslistadmin.content_list_crud.business.ImageListJSON;
import com.cmslistadmin.content_list_crud.business.ImageList;

import org.springframework.web.bind.annotation.RequestBody;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.MediaType ;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
    public class FIlesListingCRUD {
        @GetMapping("/listing/{term}")
        public String getFolderContent( @PathVariable("term") String term) {
        System.out.println(term);

        return "search";
    }

    @PostMapping( path = "/listing" , produces = MediaType.APPLICATION_JSON_VALUE)
    public String[]  getFolderContents(@RequestBody String parent) {
        FilesListing subContents = new FilesListing();
        return subContents.getFileListing(parent) ;
    }

    @RequestMapping(method = RequestMethod.GET, path = "/listing2")
    public String getFolderContent( ) {
        return "TESR";
    }
     @PostMapping( path = "/move" , produces = MediaType.APPLICATION_JSON_VALUE)
    public String  moveToFolder(@RequestBody FilesListingJSON moveDetails) {
        FilesListing moveImage = new FilesListing();
        moveImage.moveFile(moveDetails.sourceFolder, 
                            moveDetails.destinationFolder, 
                            moveDetails.sourceFileName, 
                            moveDetails.destFileName) ;   
        return  "yes"; //updateImageJSON.processImage(entity);
    }
    @PostMapping( path = "/copy" , produces = MediaType.APPLICATION_JSON_VALUE)
    public String  copyToFolder(@RequestBody FilesListingJSON copyDetails) {
        FilesListing copyFiles = new FilesListing();
        copyFiles.copyFile(   copyDetails.sourceFileName,  copyDetails.destFileName) ;   
        return  "yes"; //updateImageJSON.processImage(entity);
    }
    @PostMapping( path = "/move-test-reverse" , produces = MediaType.APPLICATION_JSON_VALUE)
    public String  moveToFolderTesReverse(@RequestBody FilesListingJSON moveDetails) {
        FilesListing moveImage = new FilesListing();
        moveImage.moveFile("/Users/shantanu/Documents/test2/",
        "/Users/shantanu/Downloads/Sketch-transit/", 
  
    "GuruInBayAreaWithGanesh051024.jpeg", 
    "GuruInBayAreaWithGanesh051024.jpeg") ;   
        return  "test reverse"; //updateImageJSON.processImage(entity);
    }
     @PostMapping( path = "/append" , produces = MediaType.APPLICATION_JSON_VALUE)
    public String  Append(@RequestBody String[] fileAndLines) {
        FilesListing writeFile = new FilesListing();
        writeFile.writeLines(fileAndLines ) ;   
        return  "yes"; //updateImageJSON.processImage(entity);
    }
    @PostMapping( path = "/create-folder" , produces = MediaType.APPLICATION_JSON_VALUE)
    public String CreateFolder(@RequestBody String folderPath) {
        FilesListing writeFile = new FilesListing();
        writeFile.createFolder(folderPath) ;   
        return  "yes"; //updateImageJSON.processImage(entity);
    }
    @PostMapping( path = "/create-file" , produces = MediaType.APPLICATION_JSON_VALUE)
    public String CreateFile(@RequestBody String[] fileAndLines) {
        
        FilesListing writeFile = new FilesListing();
        writeFile.createFile(fileAndLines[0]) ;   

        writeFile.writeLines(fileAndLines ) ;   
        return  "yes"; //updateImageJSON.processImage(entity);
    }
    // NEW-CATEGORY-REFINE-11-2024
    @PostMapping( path = "/insert-in-file" , produces = MediaType.APPLICATION_JSON_VALUE)
    public String InsertInFile(@RequestBody String[] fileTagAndLines) {
        // String filePath, String comment, List<String> linesToInsert
        String filePath = fileTagAndLines[0];
        String fileBackupPath = fileTagAndLines[1];
        String fileAutomationPath = fileTagAndLines[2];
        FilesListing copyFiles = new FilesListing();
        copyFiles.copyFile(   filePath,  fileBackupPath) ;   
        String insertComment =  fileTagAndLines[3];
        // optimize
        List<String> linesToInsert =   new ArrayList<>(); 
        for (int i = 4; i < fileTagAndLines.length;i++) {
            linesToInsert.add(fileTagAndLines[i]);
        }
      
        //FilesListing writeFile = new FilesListing();
        try {
            ArrayList<String> processedLines = FilesListing.addMenuTreeEntry(filePath, insertComment, linesToInsert) ;  
            System.out.println(processedLines.size());
            copyFiles.createFile(filePath); 
            FIlesListingCRUD.addLinestoFile(filePath, processedLines, -1);
            copyFiles.copyFile(   filePath,  fileAutomationPath) ; 
        } catch (Exception e) {
            e.printStackTrace();
            
        }
        return  "yes"; //updateImageJSON.processImage(entity);
    }
    // NEW-CATEGORY-REFINE-11-2024 Optimize later - move to core 
     public static void addLinestoFile(String fileToUpdate, ArrayList<String> processedLines, int insertLine) {
         BufferedWriter listFileWriter = null ;
        try {
         //   String nfileToUpdate = "/Users/shantanu/Documents/GitHub/fullstack/spring-boot/shan-cms-maintain/content_list_crud/src/main/java/com/cmslistadmin/content_list_crud/business/test-data/shree-ganesh-gte-q1-2023.image.list.ts" ;
         //   listFileWriter =  new BufferedWriter(new FileWriter(nfileToUpdate)); 
            listFileWriter =  new BufferedWriter(new FileWriter(fileToUpdate)); 
            for (String processedLine: processedLines) {

                try {
                     listFileWriter.write(processedLine) ;
                } catch (IOException e) {
                    e.printStackTrace();
                    return ;
                }
            }
        
            listFileWriter.flush(); 
        }catch (IOException ioe) {
            ioe.printStackTrace();
         }
         finally
         { 
            try{
               if(listFileWriter!=null)
              
            listFileWriter.close();
            }catch(Exception ex){
                System.out.println("Error in closing the BufferedWriter"+ex);
             }
         }
    }
   
  
    // 
}
