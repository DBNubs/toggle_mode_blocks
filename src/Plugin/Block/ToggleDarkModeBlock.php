<?php

namespace Drupal\toggle_mode_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Dark Mode' block.
 *
 * @Block(
 *   id = "toggle_dark_mode_block",
 *   admin_label = @Translation("Toggle Dark Mode Block"),
 * )
 */
class ToggleDarkModeBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['#theme'] = 'toggle_dark_mode_block';
    $build['#attached']['library'][] = 'toggle_mode_blocks/toggle_dark_mode';
    return $build;
  }
}
