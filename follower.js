/*
async function getScratchStudioFollowers() {
  const targetUrl = 'https://api.scratch.mit.edu/studios/32620712';
  
  // URLが正しく結合されるように修正しました（/raw?url= を確実に挿入しています）
  const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;

  try {
    const response = await fetch(proxyUrl);
    
    if (!response.ok) {
      throw new Error(`HTTPエラー! ステータス: ${response.status}`);
    }

    const data = await response.json();

    // 画面のテキストを更新
    document.getElementById('studio-title').textContent = `スタジオ名: ${data.title}`;
    document.getElementById('follower-count').textContent = `フォロワー数: ${data.stats.followers} 人`;

  } catch (error) {
    console.error('データの取得に失敗しました:', error);
    document.getElementById('follower-count').textContent = 'フォロワー数の取得に失敗しました';
  }
}

// ページが読み込まれたタイミングで実行
document.addEventListener('DOMContentLoaded', () => {
  getScratchStudioFollowers();
});
*/