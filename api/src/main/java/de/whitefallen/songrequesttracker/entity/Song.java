package de.whitefallen.songrequesttracker.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="song")
public class Song {
  @Id
  @GeneratedValue
  private Long id;
  private String bsrId;
  private String songName;
  private String requestedBy;
  private String channel;

  public Song() { }

  public Song(String bsrId, String songName, String requestedBy, String channel) {
    this.bsrId = bsrId;
    this.songName = songName;
    this.requestedBy = requestedBy;
    this.channel = channel;
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

  public String getChannel() {
    return this.channel;
  }

  public void setChannel(String channel) {
    this.channel = channel;
  }
  
}
