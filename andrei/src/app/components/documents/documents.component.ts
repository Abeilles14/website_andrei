import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  cpen400DTopics: Array<any> = [
  ]

  cpsc425Topics: Array<any> = [
  ]

  elec499Topics: Array<any> = [
  ]

  elec481Topics: Array<any> = [
  ]

  elec341Topics: Array<any> = [
    {
      name: 'Root Locus',
      link: 'assets/notes/elec341/1_root_locus.pdf'
    },
    {
      name: 'Controller Design',
      link: 'assets/notes/elec341/2_controller_design.pdf'
    },
    {
      name: 'Lead-Lag Compensator Design',
      link: 'assets/notes/elec341/3_lead-lag_compensator_design.pdf'
    },
    {
      name: 'PID Controller Design',
      link: 'assets/notes/elec341/4_PID_controller_design.pdf'
    },
    {
      name: 'Frequency Response',
      link: 'assets/notes/elec341/5_frequency_response.pdf'
    },
    {
      name: 'Bode Plot',
      link: 'assets/notes/elec341/6_bode_plot.pdf'
    },
    {
      name: 'Nyquist Stability Criterion',
      link: 'assets/notes/elec341/7_nyquist_stability_criterion.pdf'
    },
    {
      name: 'Stability Margin Frequency Domain Specification',
      link: 'assets/notes/elec341/8_stability_margin_frequency_domain_specification.pdf'
    }
  ]

  elec391Topics: Array<any> = [
    {
      name: 'Mini Project: Active Pendulum',
      link: 'assets/notes/elec391/1_active_pendulum.pdf'
    },
    {
      name: 'Final Project: Robotic Arm',
      link: 'https://github.com/Abeilles14/Robotic-Arm'
    },
    {
      name: 'Final Project: Mechanical Report',
      link: 'assets/notes/elec391/2_mechanical_report.pdf'
    },
    {
      name: 'Final Project: Electrical Report',
      link: 'assets/notes/elec391/3_electrical_report.pdf'
    },
    {
      name: 'Final Project: Controls Report',
      link: 'assets/notes/elec391/4_controls_report.pdf'
    },
  ]
  
  cpen311Topics: Array<any> = [
    {
      name: 'Lab 1: Single Octave Frequency Organ',
      link: 'assets/notes/elec391/1_active_pendulum.pdf'
    },
    {
      name: 'Lab 2: Simple Ipod',
      link: 'https://github.com/Abeilles14/Digital-Systems-Design/tree/main/lab2'
    },
    {
      name: 'Lab 3: Adding a Strength Meter to the Simple Ipod',
      link: 'https://github.com/Abeilles14/Digital-Systems-Design/tree/main/lab3'
    },
    {
      name: 'Lab 4: RC4 Decryption',
      link: 'https://github.com/Abeilles14/Digital-Systems-Design/tree/main/lab4'
    },
    {
      name: 'Lab 5: Nios, Qsys, DDS, Modulations, and Clock Domains',
      link: 'https://github.com/Abeilles14/Digital-Systems-Design/tree/main/lab5'
    },
    {
      name: 'Final Project: Talking Calculator and Speech Synthesizer',
      link: 'https://github.com/Abeilles14/Digital-Systems-Design/tree/main/final_project'
    }
  ]

  elec331Topics: Array<any> = [
    {
      name: 'Computer Networks and Internet',
      link: 'assets/notes/elec331/1_computer_networks_internet.pdf'
    },
    {
      name: 'Application Layer',
      link: 'assets/notes/elec331/2_application_layer.pdf'
    },
    {
      name: 'Transport Layer',
      link: 'assets/notes/elec331/3_transport_layer.pdf'
    },
    {
      name: 'Network Layer Data Plane',
      link: 'assets/notes/elec331/4_network_layer_data_plane.pdf'
    },
    {
      name: 'Network Layer Control Plane',
      link: 'assets/notes/elec331/5_network_layer_control_plane.pdf'
    }
  ]
  
  elec311Topics: Array<any> = [
    {
      name: 'Time Varying Fields and Maxwell Equations',
      link: 'assets/notes/elec311/1_time_varying_fields_maxwell.pdf'
    },
    {
      name: 'Uniform Plane Waves',
      link: 'assets/notes/elec311/2_uniform_plane_wave.pdf'
    },
    {
      name: 'Wave Reflection and Dispersion',
      link: 'assets/notes/elec311/3_wave_reflection_and_dispersion.pdf'
    },
    {
      name: 'Transmission Lines and Wave Guides',
      link: 'assets/notes/elec311/exam_review.pdf'
    },
    {
      name: 'Exam Review',
      link: 'assets/notes/elec311/exam_review.pdf'
    },
  ]
  
  elec333Topics: Array<any> = [
    {
      name: 'Lab 1: Object Oriented Programming',
      link: 'https://github.com/Abeilles14/System-Software-Engineering-Labs'
    },
    {
      name: 'Lab 2: Concurrency Part 1',
      link: 'https://github.com/Abeilles14/System-Software-Engineering-Labs'
    },
    {
      name: 'Lab 3: Concurrency Part 2',
      link: 'https://github.com/Abeilles14/System-Software-Engineering-Labs'
    },
    {
      name: 'Lab 4: Inter-Process Communication',
      link: 'https://github.com/Abeilles14/System-Software-Engineering-Labs'
    },
    {
      name: 'Lab 5: Thread and Process Synchronisation Communication',
      link: 'https://github.com/Abeilles14/System-Software-Engineering-Labs'
    },
    {
      name: 'Lab 6: Complex Synchronization',
      link: 'https://github.com/Abeilles14/System-Software-Engineering-Labs'
    },
    {
      name: 'Project 1: Duplex Elevator System Simulation',
      link: 'https://github.com/Abeilles14/Elevator-System-Simulation'
    },
    {
      name: 'Project 2: University System and Database',
      link: 'https://github.com/Abeilles14/University-System-Database'
    }
  ]
  
  elec315Topics: Array<any> = [
    {
      name: 'Photons, Waves, Tunneling, Particle Boxes',
      link: 'assets/notes/elec315/1_photons_waves.pdf'
    },
    {
      name: 'Atoms and Solids',
      link: 'assets/notes/elec315/2_atoms_solids.pdf'
    },
    {
      name: 'Carriers in Semiconductors',
      link: 'assets/notes/elec315/3_carriers_in_semiconductors.pdf'
    },
    {
      name: 'Density of States and Fermi Levels',
      link: 'assets/notes/elec315/4_densityofstates_fermilevels.pdf'
    },
    {
      name: 'Dielectrics',
      link: 'assets/notes/elec315/5_dielectrics.pdf'
    },
    {
      name: 'Piezoelectrics',
      link: 'assets/notes/elec315/6_piezoelectrics.pdf'
    },
    {
      name: 'Magnetic Materials',
      link: 'assets/notes/elec315/7_magnetic_materials.pdf'
    }
  ]

  elec342Topics: Array<any> = [
    {
      name: 'Magnetic Circuits',
      link: 'assets/notes/elec342/1_magnetic_circuits.pdf'
    },
    {
      name: 'Transformers',
      link: 'assets/notes/elec342/2_transformers.pdf'
    },
    {
      name: 'Electromechanical Energy Conversion',
      link: 'assets/notes/elec342/3_electromechanical_energy_conversion.pdf'
    },
    {
      name: 'DC Machines',
      link: 'assets/notes/elec342/4_DC_machines.pdf'
    },
    {
      name: 'AC Induction Machines',
      link: 'assets/notes/elec342/5_AC_induction_machines.pdf'
    },
    {
      name: 'Synchronous Machines',
      link: 'assets/notes/elec342/6_synchronous_machines.pdf'
    },
    {
      name: 'Lab 1 - AC/DC Circuits and Basic Measurements',
      link: 'assets/notes/elec342/lab1.pdf'
    },
    {
      name: 'Lab 2 - AC Transformers',
      link: 'assets/notes/elec342/lab2.pdf'
    },
    {
      name: 'Lab 3 - Permanent Magnet Brushed DC Motor',
      link: 'assets/notes/elec342/lab3.pdf'
    },
    {
      name: 'Lab 4 - AC Squirrel-Cage Induction Motor',
      link: 'assets/notes/elec342/lab4.pdf'
    },
    {
      name: 'Lab 5 - Synchronous Machine and Car Alternator',
      link: 'assets/notes/elec342/lab5.pdf'
    },
  ]

  elec211Topics: Array<any> = [
    {
      name: 'Work and Potential',
      link: 'assets/notes/elec211/1._work_and_potential.pdf'
    },
    {
      name: 'Electric Fluc and Flux Density',
      link: 'assets/notes/elec211/2._electric_flux_and_flux_density.pdf'
    },
    {
      name: 'Midterm 1 Bonus Questions',
      link: 'assets/notes/elec211/2.1_MT1_bonus.pdf'
    },
    {
      name: 'Midterm 2 Content',
      link: 'assets/notes/elec211/2.2_Midterm_2_Content.pdf'
    },
    {
      name: 'Math 264 - Flux',
      link: 'assets/notes/elec211/2.3_MATH264_flux.pdf'
    },
    {
      name: 'Gauss Law and Electric Dipoles',
      link: 'assets/notes/elec211/3._gauss_law_and_electric_dipole.pdf'
    },
    {
      name: 'Math 264 - Flux II',
      link: 'assets/notes/elec211/3.1_MATH264_flux_2.pdf'
    },
    {
      name: 'Current, Conductors, Boundary Conditions, Dialectrics',
      link: 'assets/notes/elec211/4._current_conductors_boundary_conditions_dialectric.pdf'
    },
    {
      name: 'Dialectrics and Capacitors',
      link: 'assets/notes/elec211/5._dialextrics_and_capacitors.pdf'
    },
    {
      name: 'Biot-Savart and Ampère Law',
      link: 'assets/notes/elec211/6._biot-savart_and_ampere_law.pdf'
    },
    {
      name: 'Stoke Theorem',
      link: 'assets/notes/elec211/7._stoke_theorem.pdf'
    },
    {
      name: 'Magnetic Flux',
      link: 'assets/notes/elec211/8._magnetic_flux.pdf'
    },
    {
      name: 'Magnetic Forces and Torque',
      link: 'assets/notes/elec211/9._magnetic_forces_and_torque.pdf'
    },
    {
      name: 'Magnetic Boundary Conditions',
      link: 'assets/notes/elec211/10._magnetic_boundary_conditions.pdf'
    },
    {
      name: 'Magnetic Circuits',
      link: 'assets/notes/elec211/11._magnetic_circuits.pdf'
    },
    {
      name: 'Induced EMF',
      link: 'assets/notes/elec211/12._induced_EMF.pdf'
    },
    {
      name: 'Induced EMF Examples and Rail Gun',
      link: 'assets/notes/elec211/12.1_induced_EMF_rail_gun.pdf'
    },
    {
      name: 'Inductors',
      link: 'assets/notes/elec211/13._inductors.pdf'
    }
  ]

  cpen211Topics: Array<any> = [
    {
      name: 'Lab 1: Verilog Bitwise and Addition',
      link: 'https://github.com/Abeilles14/Microcontrollers/tree/master/Lab%201'
    },
    {
      name: 'Lab 2: Digital Circuit and Discrete Logic',
      link: 'https://github.com/Abeilles14/Microcontrollers'
    },
    {
      name: 'Lab 3: Tic-Tac_Toe Game',
      link: 'https://github.com/Abeilles14/Microcontrollers/tree/master/Lab%203'
    },
    {
      name: 'Lab 4: Clock State Machines',
      link: 'https://github.com/Abeilles14/Microcontrollers/tree/master/Lab%204'
    },
    {
      name: 'Lab 5: Datapath for State Machine',
      link: 'https://github.com/Abeilles14/Microcontrollers/tree/master/Lab%205'
    },
    {
      name: 'Lab 6: Controller and Instruction Register',
      link: 'https://github.com/Abeilles14/Microcontrollers/tree/master/Lab%206'
    },
    {
      name: 'Lab 7: Read-Write Memory RAM and I/O Communication',
      link: 'https://github.com/Abeilles14/Microcontrollers/tree/master/Lab%207'
    },
    {
      name: 'Lab 8: RISC Machine and Branching Instructions',
      link: 'https://github.com/Abeilles14/Microcontrollers/tree/master/Lab%208'
    },
    {
      name: 'Lab 9: ARM Assembly and Recursive Binary Search',
      link: 'https://github.com/Abeilles14/Microcontrollers/tree/master/Lab%209'
    },
    {
      name: 'Lab 10: I/O Devices and Interrupt Service Routines',
      link: 'https://github.com/Abeilles14/Microcontrollers/tree/master/Lab%2010'
    },
    {
      name: 'Lab 11: Program Performance and Cache',
      link: 'https://github.com/Abeilles14/Microcontrollers/tree/master/Lab%2011'
    }
  ]

  elec201Topics: Array<any> = [
  ]

  math253Topics: Array<any> = [
  ]

  math256Topics: Array<any> = [
  ]

  elec291Topics: Array<any> = [
    {
      name: 'Lab 1: Student Name on LCD',
      link: 'https://github.com/Abeilles14/Electrical-Design-Studio-I'
    },
    {
      name: 'Lab 2: Alarm Clock',
      link: 'https://github.com/Abeilles14/Electrical-Design-Studio-I'
    },
    {
      name: 'Lab 3: SPI Temperature Meter',
      link: 'https://github.com/Abeilles14/Electrical-Design-Studio-I'
    },
    {
      name: 'Lab 4: Capacitance Meter and HR Monitor',
      link: 'https://github.com/Abeilles14/Electrical-Design-Studio-I'
    },
    {
      name: 'Lab 5: Phasor Voltmeter',
      link: 'https://github.com/Abeilles14/Electrical-Design-Studio-I'
    },
    {
      name: 'Lab 6: Motor Controller',
      link: 'https://github.com/Abeilles14/Electrical-Design-Studio-I'
    },
    {
      name: 'Project 1: Reflow Oven Controller',
      link: 'https://github.com/Abeilles14/Project-1-Reflow-Oven-Controller'
    },
    {
      name: 'Project 1: Report',
      link: 'assets/notes/elec291/1_reflow_oven_controller.pdf'
    },
    {
      name: 'Project 2: Coin Picking Robot',
      link: 'https://github.com/Abeilles14/Project-2-Coin-Picking-Robot'
    },
    {
      name: 'Project 2: Report',
      link: 'assets/notes/elec291/2_coin_picking_robot.pdf'
    },
  ]

  elec202Topics: Array<any> = [
    {
      name: 'Bode Plots',
      link: 'assets/notes/elec202/1._bode_plots.pdf'
    },
    {
      name: 'Filters',
      link: 'assets/notes/elec202/2._filters.pdf'
    },
    {
      name: 'Resonance',
      link: 'assets/notes/elec202/3._resonance.pdf'
    },
    {
      name: 'Two Port Networks',
      link: 'assets/notes/elec202/4._two_port_network.pdf'
    },
    {
      name: 'AC Circuits',
      link: 'assets/notes/elec202/5._ac_circuits.pdf'
    },
    {
      name: 'AC Power',
      link: 'assets/notes/elec202/6._ac_power.pdf'
    },
    {
      name: '3 Phase Circuits',
      link: 'assets/notes/elec202/7._3_phase_circuits.pdf'
    },
    {
      name: 'Transformers',
      link: 'assets/notes/elec202/8._transformers.pdf'
    },
    {
      name: 'Second Order Circuits',
      link: 'assets/notes/elec202/9._2nd_order_circuits.pdf'
    },
    {
      name: 'Final Exam Review Sheet',
      link: 'assets/notes/elec202/10._cheatsheet.pdf'
    }
  ]

  elec221Topics: Array<any> = [
    {
      name: 'Fourier Series',
      link: 'assets/notes/elec221/2._fourier_series.pdf'
    },
    {
      name: 'Fourier Transform',
      link: 'assets/notes/elec221/3._fourier_transform.pdf'
    },
    {
      name: 'Sampling',
      link: 'assets/notes/elec221/4._sampling.pdf'
    },
    {
      name: 'Z Transform',
      link: 'assets/notes/elec221/5._z_transform.pdf'
    },
    {
      name: 'State Space',
      link: 'assets/notes/elec221/6._state_space.pdf'
    },
    {
      name: 'Signals and Systems Final Review Sheet',
      link: 'assets/notes/elec221/1._signals_and_systems_cheatsheet.pdf'
    }
  ]

  civl250Topics: Array<any> = [
    {
      name: 'Module 1 Sustainable Development',
      link: 'assets/notes/civl250/M1_sustainable_development.pdf'
    },
    {
      name: 'Module 2 Critical Skills',
      link: 'assets/notes/civl250/M2_critical_skills.pdf'
    },
    {
      name: 'Module 3 Systems and Sustainability',
      link: 'assets/notes/civl250/M3_systems_and_sustainability.pdf'
    },
    {
      name: 'Module 4 Sustainable Cities',
      link: 'assets/notes/civl250/M4_sustainable_cities.pdf'
    },
    {
      name: 'Module 5 Sustainable Supply Chains',
      link: 'assets/notes/civl250/M5_sustainable_supply_chains.pdf'
    },
    {
      name: 'Module 6 Engineering and LDCs',
      link: 'assets/notes/civl250/M6_engineering_and_LDCs.pdf'
    },
    {
      name: 'Module 7 Leading Sustainability',
      link: 'assets/notes/civl250/M7_leading_sustainability.pdf'
    },
    {
      name: 'Final Project Assignment',
      link: 'assets/notes/civl250/SRL_assgn4.pdf'
    },
    {
      name: 'Final Review',
      link: 'assets/notes/civl250/final_review.pdf'
    }
  ]

  cpsc259Topics: Array<any> = [
    {
      name: 'Computation Review',
      link: 'assets/notes/cpsc259/1._computation_review.pdf'
    },
    {
      name: 'Pointers',
      link: 'assets/notes/cpsc259/2._pointers_review.pdf'
    },
    {
      name: 'C Strings',
      link: 'assets/notes/cpsc259/3._C_strings.pdf'
    },
    {
      name: 'C Structures',
      link: 'assets/notes/cpsc259/4._C_structures.pdf'
    },
    {
      name: 'Linked Lists',
      link: 'assets/notes/cpsc259/5._linked_lists.pdf'
    },
    {
      name: 'Stack ADT',
      link: 'assets/notes/cpsc259/6._stack_ADT.pdf'
    },
    {
      name: 'Queues',
      link: 'assets/notes/cpsc259/7._queues.pdf'
    },
    {
      name: 'Recursion',
      link: 'assets/notes/cpsc259/8._recursion.pdf'
    },
    {
      name: 'Trees',
      link: 'assets/notes/cpsc259/9._trees.pdf'
    },
    {
      name: 'Binary Heaps',
      link: 'assets/notes/cpsc259/10._binary_heaps.pdf'
    },
    {
      name: 'Basic Sorting',
      link: 'assets/notes/cpsc259/11._basic_sorting.pdf'
    },
    {
      name: 'Quicksort',
      link: 'assets/notes/cpsc259/12._quicksort.pdf'
    },
    {
      name: 'Hash Tables',
      link: 'assets/notes/cpsc259/13._hash_tables.pdf'
    },
    {
      name: 'Asymptotic Analysis',
      link: 'assets/notes/cpsc259/14._asymptotic_analysis.pdf'
    },
    {
      name: 'Final Review',
      link: 'assets/notes/cpsc259/15._final_review.pdf'
    }
  ]

  math307Topics: Array<any> = [
    {
      name: 'Linear Systems and Gaussian Elimination',
      link: 'assets/notes/math307/1.1_linear_systems_and_GE.pdf'
    },
    {
      name: 'Vectors and Matrix Norms',
      link: 'assets/notes/math307/1.2_vector_and_matrix_norms.pdf'
    },
    {
      name: 'Operator Norm and Condition Number',
      link: 'assets/notes/math307/1.3_operator_norm_and_condition_number.pdf'
    },
    {
      name: 'Lagrange interpolation',
      link: 'assets/notes/math307/1.4_lagrange_interpolation.pdf'
    },
    {
      name: 'Cubic Splines',
      link: 'assets/notes/math307/1.5_cubic_spline.pdf'
    },
    {
      name: 'Finite Differences',
      link: 'assets/notes/math307/1.6_finite_differences.pdf'
    },
    {
      name: 'Linear dependence',
      link: 'assets/notes/math307/2.1_linear_dependence.pdf'
    },
    {
      name: 'Vector Spaces',
      link: 'assets/notes/math307/2.2_vector_spaces.pdf'
    },
    {
      name: 'Span and Basis',
      link: 'assets/notes/math307/2.3_span_and_basis.pdf'
    },
    {
      name: 'Four Fundamental Spaces For Matrix',
      link: 'assets/notes/math307/2.4_four_fundamental_spaces_for_matrix.pdf'
    },
    {
      name: 'Orthogonal Subspaces and Complement Relations',
      link: 'assets/notes/math307/2.5_orthogonal_subspaces_complement_relations.pdf'
    },
    {
      name: 'Formula For Chemical Systems',
      link: 'assets/notes/math307/2.6_formula_for_chemical_systems.pdf'
    },
    {
      name: 'Orthogonality',
      link: 'assets/notes/math307/3.1_orthogonality.pdf'
    },
    {
      name: 'Least Squares Formula',
      link: 'assets/notes/math307/3.2_least_squares.pdf'
    },
    {
      name: 'Polynomial Fit',
      link: 'assets/notes/math307/3.2_polynomial_fit.pdf'
    },
    {
      name: 'Complex Numbers',
      link: 'assets/notes/math307/3.3_complex_numbers.pdf'
    },
    {
      name: 'Complex Vector Spaces, Orthonormal Basis, Unitary Matrices',
      link: 'assets/notes/math307/3.4_complex_vectorspaces_orthonormal_basis_unitary_matrices.pdf'
    },
    {
      name: 'Eigen Values, Vector Diagonalization, Hermitian Matrices',
      link: 'assets/notes/math307/4.1_eigen_values_vectors_diagonalization_hermitian_matrices.pdf'
    },
    {
      name: 'Power Method, Recursion Relations, Tight Binding Model',
      link: 'assets/notes/math307/4.2_power_method_recursion_relations_tight_binding_model.pdf'
    },
    {
      name: 'Markov Chains, Google Page Rank',
      link: 'assets/notes/math307/4.3_markov_chains_google_page_rank.pdf'
    },
    {
      name: 'Singular Value Decomposition',
      link: 'assets/notes/math307/4.4_singular_value_decomposition.pdf'
    },
  ]

  phil250Topics: Array<any> = [
    {
      name: "Argument Extraction: What Mary Didn't Know",
      link: 'assets/notes/phil250/mary_argument_extraction.pdf'
    },
    {
      name: "Argument Extraction: What it's Like to be a Bat",
      link: 'assets/notes/phil250/bat_argument_extraction.pdf'
    },
    {
      name: "Critical Assessment: What Mary Didn't Know",
      link: 'assets/notes/phil250/jackson_critical_assignment.pdf'
    },
    {
      name: 'Are Programmers and AI Scientists Ethically Responsible for Their Code',
      link: 'assets/notes/phil250/ethical_responsibility_code.pdf'
    },
    {
      name: 'Final Paper: Controlling Algorithmic Biases in a Technology Dependent Society',
      link: 'assets/notes/phil250/algorithmic_biases.pdf'
    }
  ]

  japn101Topics: Array<any> = [
    {
      name: 'Chapter 1 - Counting, Time, Age',
      link: 'assets/notes/japn101/1_count_time_age.pdf'
    },
    {
      name: 'Chapter 2 - This, That, Here, There, Currency',
      link: 'assets/notes/japn101/2_this_that_here_there_money.pdf'
    },
    {
      name: 'Chapter 3 - Conjugation, Particles',
      link: 'assets/notes/japn101/3_conjugation_particles.pdf'
    },
    {
      name: 'Chapter 4 - Past Tense, Location, Date',
      link: 'assets/notes/japn101/4_past_tense_location_date.pdf'
    },
    {
      name: 'Chapter 5 - i-adjectives, na-adjectives',
      link: 'assets/notes/japn101/5_i-adj_na-adj.pdf'
    },
    {
      name: 'Chapter 6 - te-form, Multiple Activities',
      link: 'assets/notes/japn101/6_te-form_multiple_activities.pdf'
    },
    {
      name: 'Chapter 7 - Describing, te-form Sentences',
      link: 'assets/notes/japn101/7_describing_te-form_sentences.pdf'
    },
    {
      name: 'Chapter 8 - Short Form, Informal Speech',
      link: 'assets/notes/japn101/8_short_form_informal_speech.pdf'
    },
    {
      name: 'Chapter 9 - Past Tense, Short Form, Qualifying Nouns',
      link: 'assets/notes/japn101/9_past_tense_short_form_qualifying_nouns.pdf'
    },
    {
      name: 'Chapter 10 - Comparison, Planning, Becoming',
      link: 'assets/notes/japn101/10_comparison_planning_become.pdf'
    },
    {
      name: 'Chapter 11 - Aspirations, Listing, Examples',
      link: 'assets/notes/japn101/11_aspirations_listing_examples.pdf'
    },
    {
      name: 'Chapter 12 - Explaining, Reasons, Necessity',
      link: 'assets/notes/japn101/12_explaining_reason_necessity.pdf'
    }
  ]

  japn201Topics: Array<any> = [
    {
      name: 'Chapter 13 - Potential Verbs',
      link: 'assets/notes/japn201/13_potential_verbs.pdf'
    },
    {
      name: 'Chapter 14 - Possibility, Advice',
      link: 'assets/notes/japn201/14_possibility_advice.pdf'
    },
    {
      name: 'Chapter 15 - Volition Form, Perparing',
      link: 'assets/notes/japn201/15_volitional_form_preparing.pdf'
    },
    {
      name: 'Chapter 16 - Giving, Receiving, Time',
      link: 'assets/notes/japn201/16_give_receive_time'
    },
    {
      name: 'Chapter 17 - Reporting, If This Occurs',
      link: 'assets/notes/japn201/17_reporting_if.pdf'
    },
    {
      name: 'Chapter 19 - Honorific Form, Respectful Advice',
      link: 'assets/notes/japn201/19_honorific_respectful_advice.pdf'
    },
    {
      name: 'Chapter 20 - Modest Expressions, Humble Expressions',
      link: 'assets/notes/japn201/20_modest_humble_expressions.pdf'
    },
    {
      name: 'Chapter 21 - Passive Sentences, Want Something to Occur',
      link: 'assets/notes/japn201/21_passive_sentences_want.pdf'
    },
    {
      name: 'Chapter 22 - Causative Sentences, Giving Orders',
      link: 'assets/notes/japn201/22_causative_sentences_order.pdf'
    },
    {
      name: 'Chapter 23 - Causative-Passive Sentences, Making a Habit',
      link: 'assets/notes/japn201/23_causative-passive_sentences_habit.pdf'
    },
  ]

  constructor() { }

  ngOnInit(): void {
    let top = document.querySelector("#top");
    if (top) {
      top.scrollIntoView();
    }
  }

}

