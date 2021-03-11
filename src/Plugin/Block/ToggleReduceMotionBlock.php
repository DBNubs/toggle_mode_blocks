<?php

namespace Drupal\toggle_mode_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Reduce Motion' block.
 *
 * @Block(
 *   id = "toggle_reduce_motion_block",
 *   admin_label = @Translation("Toggle Reduce Motion Block"),
 * )
 */
class ToggleReduceMotionBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['#theme'] = 'toggle_reduce_motion_block';
    $build['#attached']['library'][] = 'toggle_mode_blocks/toggle_reduce_motion';
    return $build;
  }
}
