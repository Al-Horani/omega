


const Login = () => {
 

  return (
    <div className="w-screen h-screen flex items-center justify-center">
        <form action="" method="post" className="flex flex-col  p-8  w-full h-1/2">
          <input type="text" name="" id="" placeholder="الاسم" className="p-2 rounded-lg my-8 bg-slate-100 " />
          <input type="password" name="" id="" placeholder="كلمة المرور" className="p-2 rounded-lg bg-slate-100"/>
          <input type="submit" value="تسجيل الدخول" className="my-8 text-lg font-medium text-white rounded-lg bm p-4" />
        </form>
    </div>
  )
}

export default Login;