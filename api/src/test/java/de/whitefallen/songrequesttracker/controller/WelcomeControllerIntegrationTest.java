package de.whitefallen.songrequesttracker.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import de.whitefallen.songrequesttracker.service.WelcomeService;

import static org.hamcrest.Matchers.equalTo;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class WelcomeControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private WelcomeService welcomeService;

    @Test
    void shouldGetCustomWelcomeMessage() throws Exception {
        when(welcomeService.getWelcomeMessage("John")).thenReturn("Welcome John!");
        mockMvc.perform(get("/welcome?name=John")).andDo(print()).andExpect(status().isOk()).andExpect(content().string(equalTo("Welcome John!")));
        verify(welcomeService).getWelcomeMessage("John");
    }
    @Test
    void shouldGetDefaultWelcomeMessage() throws Exception {
        when(welcomeService.getWelcomeMessage("Stranger")).thenReturn("Welcome Stranger!");
        mockMvc.perform(get("/welcome")).andDo(print()).andExpect(status().isOk()).andExpect(content().string(equalTo("Welcome Stranger!")));
        verify(welcomeService).getWelcomeMessage("Stranger");
    }
}
