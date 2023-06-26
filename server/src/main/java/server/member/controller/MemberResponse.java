package server.member.controller;

public class MemberResponse {
    private Long memberId;
    private String email;

    // 생성자
    public MemberResponse(Long memberId, String email) {
        this.memberId = memberId;
        this.email = email;
    }

    public Long getMemberId() {
        return memberId;
    }

    public void setMemberId(Long memberId) {
        this.memberId = memberId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}