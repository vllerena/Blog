<?php

namespace App\Http\Livewire\Layout\Shared;

use Livewire\Component;

class TitleMeta extends Component
{
    public $title;

    public function mount($title)
    {
        $this->title = $title;
    }

    public function render()
    {
        return view('livewire.layout.shared.title-meta');
    }
}
