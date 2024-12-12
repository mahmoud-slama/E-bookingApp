package com.chebbi.security.ServicesImpl;

import com.chebbi.security.Services.IReclamationService;
import com.chebbi.security.entities.Reclamation;
import com.chebbi.security.repository.ReclamationRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Slf4j
@Service
public class ReclamationServiceImpl implements IReclamationService {

    @Autowired
    ReclamationRepository reclamationRepository;


    @Override
    public Reclamation addReclamation(Reclamation reclamation) {
        return reclamationRepository.save(reclamation) ;
    }

    @Override
    public void removeReclamtion(Integer id) {
    if (retrieveReclamtion(id)==null)
    {
        System.out.print("Reclamation DOES NOT EXISTS");

    }
        reclamationRepository.deleteById(id);
    }

    @Override
    public Reclamation retrieveReclamtion(Integer id) {
        return reclamationRepository.findById(id).orElse(null);
    }



    @Override
    public Reclamation updateReclamation(Reclamation reclamation) {

        System.out.print("Information(s) successfully updated");
        return reclamationRepository.save(reclamation);
    }


    @Override
    public List<Reclamation> retrieveAllReclamation() {
        return reclamationRepository.findAll();
    }

}
