package lab.app;
import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.Entity;
import jakarta.ws.rs.core.MediaType;

public class Main {
    public static void main(String[] args) {
        Client client = ClientBuilder.newClient();
        String status = client.target("http://localhost:8080/Server-1.0-SNAPSHOT/" +
                        "api/complaints/501/status")
                .request(MediaType.TEXT_PLAIN)
                .get(String.class);

        System.out.println("Status: " + status);

        String complaints = client.target("http://localhost:8080/Server-1.0-SNAPSHOT/" +
                        "api/complaints")
                .request(MediaType.APPLICATION_JSON)
                .get(String.class);

        System.out.println("Complaints: " + complaints);

        String complaint = client.target("http://localhost:8080/Server-1.0-SNAPSHOT/" +
                        "api/complaints/503")
                .request(MediaType.APPLICATION_JSON)
                .get(String.class);

        System.out.println("Complaint: " + complaint);

        String newcomplaint = "{\"id\": 504, \"complaintDate\": \"2021-10-10\", \"complaintText\": \"This is a new complaint\", \"author\": \"ja\", \"status\": \"close\"}";


        String putcomplaint = client.target("http://localhost:8080/Server-1.0-SNAPSHOT/" +
                        "api/complaints/504")
                .request(MediaType.APPLICATION_JSON)
                .put(Entity.entity(newcomplaint, MediaType.APPLICATION_JSON), String.class);

        System.out.println("PUT_Complaint: " + newcomplaint);

        String complaintss = client.target("http://localhost:8080/Server-1.0-SNAPSHOT/" +
                        "api/complaints")
                .request(MediaType.APPLICATION_JSON)
                .get(String.class);

        System.out.println("Complaints: " + complaintss);

        client.close();
    }

}