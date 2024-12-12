package com.chebbi.security.Services;


import com.chebbi.security.entities.Reclamation;

import java.util.List;

public interface IReclamationService {

    Reclamation addReclamation (Reclamation reclamation);
    void removeReclamtion (Integer id);
    Reclamation retrieveReclamtion (Integer id);

    List<Reclamation> retrieveAllReclamation();

    Reclamation updateReclamation(Reclamation reclamation);


}


