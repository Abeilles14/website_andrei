import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
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
      link: 'assets/notes/elec211/2.2_Midterm_2_Content'
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


  constructor() { }

  ngOnInit(): void {
    let top = document.querySelector("#top");
    if (top) {
      top.scrollIntoView();
    }
  }

}

