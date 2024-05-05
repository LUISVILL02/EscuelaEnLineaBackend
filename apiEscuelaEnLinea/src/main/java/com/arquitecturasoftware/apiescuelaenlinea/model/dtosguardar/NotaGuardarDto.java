package com.arquitecturasoftware.apiescuelaenlinea.model.dtosguardar;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.time.LocalDate;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class NotaGuardarDto {
    private Long idNota;
    @JsonFormat(pattern = "dd/MM/yyyy",timezone = "GMT-5")
    private LocalDate fecha;
    private Integer periodo;
    private String nombreActividad;
    private Float nota;
    private Long idAlumno;
    private Long idAsignacion;
}
