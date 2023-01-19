<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">하우스 시설자재</a></li>
                <li><a class="dropdown-item" href="#">관수 / 배관 자재</a></li>
                <li><a class="dropdown-item" href="#">물탱크/고래통</a></li>
                <li><a class="dropdown-item" href="#">하우스 / 멀칭비닐</a></li>
                <li><a class="dropdown-item" href="#">철물 / 공구 / 기타자재</a></li>
                <li><a class="dropdown-item" href="#">전체 상품 보기</a></li>
            </ul>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav col-10">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">상품문의</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">상품후기</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">공지사항</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li v-for="nav in navigations" :key="nav.name" class="col-8">
                        <RouterLink :to="nav.href" active-class="active" class="nav-link">
                            {{ nav.name }}
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            navigations :[{
                name : '회원가입',
                href : '/account'
            },{
                name : '로그인',
                href : '/login'
            }]
        }
    }
}
</script>