$(document).ready(function() {
    $('#qa-form').on('submit', function(e) {
        e.preventDefault();
        
        // 폼 데이터 가져오기
        var title = $('#question-title').val();
        var body = $('#question-body').val();
        
        // 새로운 Q&A 항목 생성
        var newQAItem = `
            <div class="qa-item">
                <h3>${title}</h3>
                <p><strong>Question:</strong> ${body}</p>
                <p><strong>Answer:</strong> This question has not been answered yet.</p>
            </div>
        `;
        
        // Q&A 목록에 추가
        $('#qa-list').append(newQAItem);
        
        // 폼 초기화
        $('#qa-form')[0].reset();
    });
});
