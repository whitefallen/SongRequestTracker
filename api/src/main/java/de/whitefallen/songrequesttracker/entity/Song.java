package de.whitefallen.songrequesttracker.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Song {
  @Id
  @GeneratedValue
  private Long id;
  private String bsrId;
  private String songName;
  private String requestedBy;

  public Song() { }

  public Song(String bsrId, String songName, String requestedBy) {
    this.bsrId = bsrId;
    this.songName = songName;
    this.requestedBy = requestedBy;
  }

  public Long getId() {
    return this.id;
  }
  public String getSongName() {
    return this.songName;
  }
  public String getBsrId() {
    return this.bsrId;
  }

  public void setId(Long id) {
    this.id = id;
  }
  public void setSongName(String songName) {
    this.songName = songName;
  }
  public void setBsrId(String bsrId) {
    this.bsrId = bsrId;
  }

  public String getRequestedBy() {
    return requestedBy;
  }

  public void setRequestedBy(String requestedBy) {
    this.requestedBy = requestedBy;
  }
}
