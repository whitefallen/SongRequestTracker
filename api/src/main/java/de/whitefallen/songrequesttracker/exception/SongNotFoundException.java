package de.whitefallen.songrequesttracker.exception;

public class SongNotFoundException extends RuntimeException{
    public SongNotFoundException(Long id) {
        super("Could not find Song " + id);
    }
}
