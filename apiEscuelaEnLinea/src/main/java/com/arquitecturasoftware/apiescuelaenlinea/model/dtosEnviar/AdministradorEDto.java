package com.arquitecturasoftware.apiescuelaenlinea.model.dtosEnviar;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class AdministradorEDto extends UsuarioEDto {
    @JsonFormat(pattern = "dd/MM/yyyy", timezone = "GMT-5")
    private LocalDate fechaNacimiento;
}
