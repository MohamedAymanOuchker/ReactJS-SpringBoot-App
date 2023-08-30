package com.aymanou.repository;

import java.util.Optional;

import com.aymanou.models.ERole;
import com.aymanou.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}
