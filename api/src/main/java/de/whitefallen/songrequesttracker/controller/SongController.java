package de.whitefallen.songrequesttracker.controller;

import de.whitefallen.songrequesttracker.entity.Song;
import de.whitefallen.songrequesttracker.exception.SongNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import de.whitefallen.songrequesttracker.repository.SongRepository;

import java.util.List;
import java.util.Optional;

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

  @GetMapping("/songs")
  List<Song> getSongs() {
    return repository.findAll();
  }

  @GetMapping("/songs/{id}")
  Song getSong (@PathVariable Long id) {
    return repository.findById(id).orElseThrow(() -> new SongNotFoundException(id));
  }

  @PutMapping("/songs/{id}")
  Song replaceSong(@RequestBody Song newSong, @PathVariable Long id) {
    return repository.findById(id)
            .map(song -> {
              song.setSongName(newSong.getSongName());
              song.setBsrId(newSong.getBsrId());
              song.setRequestedBy(newSong.getRequestedBy());
              return repository.save(song);
            })
            .orElseGet(() -> {
              newSong.setId(id);
              return repository.save(newSong);
            });
  }

  @DeleteMapping("/songs/{id}")
  ResponseEntity<Void> deleteSong(@PathVariable Long id) {
    Optional<Song> song = repository.findById(id);
    if(song.isPresent()) {
      repository.deleteById(id);
      return new ResponseEntity<>(HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }
}
