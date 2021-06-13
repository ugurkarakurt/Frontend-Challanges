export class Components {
  login() {
    return ` <div class="input-wrapper">
                <input type="email" name="email" id="email" required placeholder="E-posta adresi">
            </div>
            <div class="input-wrapper">
                <input type="password" name="password" id="password" required placeholder="Şifre">
                <span id="showPassword"><img id="eyeIcon" src="assets/images/eye.svg" width="25px"></span>
            </div>
            <div class="form-footer">
                <div class="submit-button-wrapper">
                    <button class="submit-btn">Giriş yap</button>
                </div>
                <div class="forgot-password-wrapper">
                    <a href="" class="forgot-password-btn">Şifremi unuttum</a>
                </div>
            </div>`;
  }
  register() {
    return ` <div class="title">E-posta adresi ile üye ol</div>
                <div class="input-wrapper">
                    <input style="margin-right: 10px;" name="range_characters_name" required type="text" placeholder="Ad">
                    <input name="range_characters_surname" type="text" required placeholder="Soyad">
                </div>
                <div class="input-wrapper">
                    <input type="text" name="email" id="email" required placeholder="E-posta adresi">
                </div>
                <div class="input-wrapper">
                    <input type="password" name="password" id="password" required placeholder="Şifre">
                    <span id="showPassword"><img id="eyeIcon" src="assets/images/eye.svg" width="25px"></span>
                </div>
                <div class="input-wrapper">
                    <input type="password" name="repeat_password" id="repeat_password" required placeholder="Şifre onayı">
                    <span id="showPassword"><img id="eyeIcon2" src="assets/images/eye.svg" width="25px"></span>
                </div>
                <div class="form-footer">
                    <div class="consent-text">
                        <!-- Refarance  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox-->
                        <label class="container">
                            <input type="checkbox" required id="consentText" name="consentText">
                            <span class="checkmark"></span>
                        </label>
                        <!-- /refarance -->
                        <p class="consent-text-description">Önemli kampanyalardan haberdar olmak için <strong>Rıza
                                Metni</strong> kapsamında
                            elektronik ileti almak istiyorum.</p>
                    </div>
                    <div class="register-button-wrapper">
                        <button class="submit-btn">Üye ol</button>
                    </div>
                </div>`;
  }
}
