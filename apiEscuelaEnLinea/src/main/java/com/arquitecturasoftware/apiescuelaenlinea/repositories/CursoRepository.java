package com.arquitecturasoftware.apiescuelaenlinea.repositories;

import com.arquitecturasoftware.apiescuelaenlinea.model.entities.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {
    //promedio de notas del curso
    @Query("SELECT AVG(n.nota) FROM Nota n WHERE n.alumno.curso.idCurso = ?1")
    public Double promedioNotas(Long idCurso);

    Optional<Curso> findByNombre(String nombre);
}
