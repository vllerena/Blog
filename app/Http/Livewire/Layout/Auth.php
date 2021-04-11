<?php

namespace App\Http\Livewire\Layout;

use Livewire\Component;

class Auth extends Component
{
    public $title;

    public function mount($title)
    {
        $this->title = $title;
    }

    public function render()
    {
        return view('livewire.layout.auth');
    }
}
