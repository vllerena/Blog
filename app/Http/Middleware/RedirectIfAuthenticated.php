<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    public function handle(Request $request, Closure $next, ...$guards)
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check() && Auth::user()->hasRole('administrador')) {
                return redirect()->route('admin.dashboard');
            } else if (Auth::guard($guard)->check() && Auth::user()->hasRole('autor')) {
                return redirect()->route('autor.dashboard');
            } else {
//                return redirect(RouteServiceProvider::HOME);
                return $next($request);
            }
        }
        return $next($request);
    }
}
