package com.chebbi.security.controller;

import com.chebbi.security.ServicesImpl.ReclamationServiceImpl;
import com.chebbi.security.entities.Reclamation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/Reclamtion")
@Slf4j
@CrossOrigin("http://localhost:4200/")
public class ReclamtionRestController {

    @Autowired
    ReclamationServiceImpl reclamationService;


    @GetMapping("/show-all-reclamations")
    public List<Reclamation> retriveAllReclamations() {
        List<Reclamation> reclamations = reclamationService.retrieveAllReclamation();
        return reclamations;
    }
    @GetMapping("/show-reclamation/{id}")
    public Reclamation retrieveReclamation(@Valid @PathVariable("id") Integer id) {
        return reclamationService.retrieveReclamtion(id);
    }

    @PostMapping("/add-reclamation")
    public ResponseEntity<String> addReclamation(@Valid @RequestBody Reclamation rec) {
        Reclamation reclamation = reclamationService.addReclamation(rec);
        return ResponseEntity.ok("Reclamtion added successfully!");
    }
    @DeleteMapping("/remove-reclamation/{id}")
    public ResponseEntity<String> removeReclamation(@PathVariable("id") Integer id) {
        reclamationService.removeReclamtion(id);
        return ResponseEntity.ok("Reclamation deleted successfully!");
    }

    @PutMapping("/update-reclamation")
    public ResponseEntity<String> updateUser(@Valid @RequestBody Reclamation rec) {
        Reclamation reclamation  = reclamationService.updateReclamation(rec);
        return ResponseEntity.ok("Reclamation updated successfully!");
    }
}
