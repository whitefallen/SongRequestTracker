package de.whitefallen.songrequesttracker.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import de.whitefallen.songrequesttracker.entity.Song;

public interface SongRepository extends JpaRepository<Song, Long> {

}