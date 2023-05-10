export class AuthModels {
  isLogin(loginStatus: string | null): boolean {
    if (loginStatus === 'true') {
        return true
    }
    return false
  }
  getLoginStatus(): string | null {
    let loginStatus: string | null = 'false'
    if (localStorage.getItem('loginStatus')) {
        loginStatus = localStorage.getItem('loginStatus')
    }
    return loginStatus
  }
  errorOutPut(error: any): void {
    const errorCode = error.code
    const errorMessage = error.message
    console.log('errorCode: ' + errorCode)
    console.log('errorMessage: ' + errorMessage)
  }
  convErrCodeToMsg(error: any): string {
    let errMsg = ''
    switch (error.code) {
      case 'auth/invalid-email':
        errMsg = 'Emailが未入力です。'
        break
      case 'auth/too-many-requests':
        errMsg = 'アカウントがロックされました。しばらく時間をおいて再度実行してください。'
        break
      case 'auth/internal-error':
      case 'auth/wrong-password':
      case 'auth/user-not-found':
        errMsg = 'Emailとパスワードの組み合わせに誤りがあります。'
        break
      default:
        errMsg = 'その他のエラーです。管理者にお問い合わせください。'
        break
    }
    return errMsg
  }
}
