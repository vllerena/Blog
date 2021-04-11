<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AutorMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check() && Auth()->user()->hasRole('autor'))
        {
            return $next($request);
        } else {
            return redirect()->route('auth.login');
        }

    }
}
