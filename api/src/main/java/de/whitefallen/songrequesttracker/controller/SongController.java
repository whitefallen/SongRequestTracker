package de.whitefallen.songrequesttracker.controller;

import de.whitefallen.songrequesttracker.entity.Song;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.whitefallen.songrequesttracker.repository.SongRepository;

@RestController
@RequestMapping("/api")
public class SongController {

  private final SongRepository repository;

  SongController(SongRepository repository) {
    this.repository = repository;
  }
  
  @PostMapping("/songs")
  Song newSong(@RequestBody Song newSong) {
    return repository.save(newSong);
  }
}
