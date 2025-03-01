<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="container mx-auto p-4 border-2 border-gray-300 rounded-lg shadow-lg">
      <Tabs value="0">
        <TabList>
          <Tab value="0">
            로그인
          </Tab>
          <Tab value="1">
            회원가입
          </Tab>
          <Tab value="2">
            비밀번호 변경
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <Fluid>
              <div class="grid grid-cols-[1fr] gap-4">
                <div class="font-bold">
                  아이디
                </div>
                <div>
                  <InputText
                    v-model="loginDto.username"
                    type="text"
                    placeholder="아이디를 입력하세요"
                    class="w-full"
                    required
                  />
                </div>
                <div class="font-bold">
                  비밀번호
                </div>
                <div>
                  <InputText
                    v-model="loginDto.password"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    class="w-full"
                    required
                  />
                </div>
              </div>
              <div class="flex justify-end gap-2 mt-4">
                <Button
                  label="취소"
                  severity="secondary"
                  @click="handleCancel"
                />
                <Button
                  label="로그인"
                  severity="primary"
                  @click="handleLogin"
                />
              </div>
            </Fluid>
          </TabPanel>

          <!-- 회원가입 패널 -->
          <TabPanel value="1">
            <Fluid>
              <div class="grid grid-cols-[1fr] gap-4">
                <div class="font-bold">
                  아이디
                </div>
                <div>
                  <InputText
                    v-model="signupDto.username"
                    type="text"
                    placeholder="아이디를 입력하세요"
                    class="w-full"
                    required
                  />
                </div>

                <div class="font-bold">
                  비밀번호
                </div>
                <div>
                  <InputText
                    v-model="signupDto.password"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    class="w-full"
                    required
                  />
                </div>

                <div class="font-bold">
                  비밀번호 확인
                </div>
                <div>
                  <InputText
                    v-model="signupDto.confirmPassword"
                    type="password"
                    placeholder="비밀번호를 다시 입력하세요"
                    class="w-full"
                    required
                  />
                </div>

                <div class="font-bold">
                  이메일
                </div>
                <div>
                  <InputText
                    v-model="signupDto.email"
                    type="email"
                    placeholder="이메일을 입력하세요"
                    class="w-full"
                    required
                  />
                </div>

                <div class="font-bold">
                  이름
                </div>
                <div>
                  <InputText
                    v-model="signupDto.name"
                    type="text"
                    placeholder="이름을 입력하세요"
                    class="w-full"
                    required
                  />
                </div>
              </div>
              <div class="flex justify-end gap-2 mt-4">
                <Button
                  label="취소"
                  severity="secondary"
                  @click="handleSignupCancel"
                />
                <Button
                  label="회원가입"
                  severity="primary"
                  @click="handleSignup"
                />
              </div>
            </Fluid>
          </TabPanel>

          <!-- 비밀번호 변경 패널 -->
          <TabPanel value="2">
            <Fluid>
              <div class="grid grid-cols-[1fr] gap-4">
                <div class="font-bold">
                  아이디
                </div>
                <div>
                  <InputText
                    v-model="changePasswordDto.username"
                    type="text"
                    placeholder="아이디를 입력하세요"
                    class="w-full"
                    required
                  />
                </div>
                <div class="font-bold">
                  이메일
                </div>
                <div>
                  <InputText
                    v-model="changePasswordDto.email"
                    type="email"
                    placeholder="이메일을 입력하세요"
                    class="w-full"
                    required
                  />
                </div>

                <div class="font-bold">
                  새 비밀번호
                </div>
                <div>
                  <InputText
                    v-model="changePasswordDto.password"
                    type="password"
                    placeholder="새 비밀번호를 입력하세요"
                    class="w-full"
                    required
                  />
                </div>

                <div class="font-bold">
                  확인
                </div>
                <div>
                  <InputText
                    v-model="changePasswordDto.confirmPassword"
                    type="password"
                    placeholder="새 비밀번호를 다시 입력하세요"
                    class="w-full"
                    required
                  />
                </div>
              </div>
              <div class="flex justify-end gap-2 mt-4">
                <Button
                  label="취소"
                  severity="secondary"
                  @click="handlePasswordChangeCancel"
                />
                <Button
                  label="변경"
                  severity="primary"
                  @click="handlePasswordChange"
                />
              </div>
            </Fluid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
/* Interfaces */
interface LoginDto {
  username: string
  password: string
}

interface SignupDto {
  username: string
  password: string
  confirmPassword: string
  email: string
  name: string
}

interface ChangePasswordDto {
  username: string
  email: string
  password: string
  confirmPassword: string
}

/* Globals Variables */
// 로그인 관련 변수
const loginDto = ref<LoginDto>({
  username: '',
  password: '',
});

// 회원가입 관련 변수
const signupDto = ref<SignupDto>({
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
  name: '',
});

// 비밀번호 변경 관련 변수
const changePasswordDto = ref<ChangePasswordDto>({
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
});

/* Functions */
// 로그인 핸들러 (기존 코드 유지)
async function handleLogin() {
  try {
    const token = await Http.post<string>('/auth/login', loginDto.value);
    setCookie('token', token, { path: '/' });
    navigateTo('/main');
  }
  catch (error) {
    console.error('Login failed:', error);
  }
}

function setCookie(name: string, value: string, options: any) {
  let cookie = `${name}=${encodeURIComponent(value)};`;

  // Default options
  const defaultOptions = {
    path: '/',
    secure: true, // This should be true if your site is served over HTTPS
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    sameSite: 'lax', // Helps prevent CSRF attacks
  };

  // Merge default options with provided options
  const mergedOptions = { ...defaultOptions, ...options };

  // Add each option to the cookie string
  for (const key in mergedOptions) {
    if (mergedOptions[key] !== undefined) {
      cookie += `${key.charAt(0).toUpperCase() + key.slice(1)}=${mergedOptions[key]};`;
    }
  }

  // Set the cookie
  document.cookie = cookie;
}

function handleCancel() {
  loginDto.value.username = '';
  loginDto.value.password = '';
}

// 회원가입 핸들러
function handleSignup() {
  const { password, confirmPassword } = signupDto.value;

  if (password !== confirmPassword)
    return console.error('Passwords do not match');
  Http.post('/auth/signup', signupDto.value);
}

function handleSignupCancel() {
  signupDto.value.username = '';
  signupDto.value.password = '';
  signupDto.value.confirmPassword = '';
  signupDto.value.email = '';
  signupDto.value.name = '';
}

// 비밀번호 변경 핸들러
function handlePasswordChange() {
  const { password, confirmPassword } = changePasswordDto.value;

  if (password !== confirmPassword) {
    console.error('Passwords do not match');
  }
  Http.post('/auth/changePassword', changePasswordDto.value);
}

function handlePasswordChangeCancel() {
  changePasswordDto.value.username = '';
  changePasswordDto.value.email = '';
  changePasswordDto.value.password = '';
  changePasswordDto.value.confirmPassword = '';
}
</script>

  <style scoped>
  /* 기존 스타일 유지 */
  </style>
