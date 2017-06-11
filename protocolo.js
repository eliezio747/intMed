var classProtocolo;
var protocolo;
var codigo;
var nome;
var sequenciaOrigem;
var sequenciaSaida;
var referencia;
var estado;

classProtocolo="root"{
    protocolo= {
                codigo="VerificarPatologia";
                nome="verificaPatologia";
                estado="grave"{
                                    codigo="EncaminharEixoVermelho";
                                    nome="EncaminharEixoVermelho";
                                    sequenciaOrigem="verificarPatologia";
                                    estado="Emergencia"{
                                                                            codigo="EncaminharAreaVermelha";
                                                                            nome="EncaminharAreaVermelha";
                                                                            sequenciaOrigem="EncaminhaEixoVermelho";
    }estado="naoEmergencia"{
                                                                            codigo="verificarEstabilidadePaciente";
                                                                            nome="verificarEstabilidadePaciente";
                                                                            sequenciaOrigem="EncaminharEixoVermelho";
                                    estado="pacienteEstavel"{
                                                                            codigo="EncaminharAreaAmarela";
                                                                            nome="EncaminharAreaAmarela";
                                                                            sequenciaOrigem="verificarEstabilidadePaciente";
                                    }estado="pacienteNaoEstavel"{
                                                                            codigo="EncaminharPlano2";
                                                                            nome="EncaminharPlano2";
                                                                            sequenciaOrigem="verificaEstabilidadePaciente";
                                    }
    }
                                                    
    }estado="naoGrave"{
                                    codigo="EncaminhaEixoAzul";
                                    nome="EncaminharEixoAzul";
                                    sequenciaOrigem="verificarPatologia";
    }
    }
    
    protocolo={
                codigo="finalizarAtendimento";
                nome="finalizarAtendimento";
                estado="PacienteAtendido"{
                                    codigo="EncaminharAreaVerde";
                                    nome="EncaminharAreaVerde";
                                    sequenciaOrigem="finalizarAtendimento";
}estado="PacienteNaoAtendido"{
                        referencia="Atendimento";
}
    }
}
