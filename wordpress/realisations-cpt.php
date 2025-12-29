<?php
/**
 * Custom Post Type: Realisations (Portfolio)
 *
 * A ajouter dans le fichier functions.php de votre theme
 * ou dans un plugin custom (recommande)
 *
 * Prerequis: WPGraphQL doit etre installe et active
 */

// Enregistrement du Custom Post Type
function bluewave_register_realisations_cpt() {
    $labels = array(
        'name'                  => 'Realisations',
        'singular_name'         => 'Realisation',
        'menu_name'             => 'Realisations',
        'name_admin_bar'        => 'Realisation',
        'add_new'               => 'Ajouter',
        'add_new_item'          => 'Ajouter une realisation',
        'new_item'              => 'Nouvelle realisation',
        'edit_item'             => 'Modifier la realisation',
        'view_item'             => 'Voir la realisation',
        'all_items'             => 'Toutes les realisations',
        'search_items'          => 'Rechercher une realisation',
        'not_found'             => 'Aucune realisation trouvee',
        'not_found_in_trash'    => 'Aucune realisation dans la corbeille',
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'realisations'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-portfolio',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest'       => true,
        // WPGraphQL support
        'show_in_graphql'    => true,
        'graphql_single_name' => 'realisation',
        'graphql_plural_name' => 'realisations',
    );

    register_post_type('realisation', $args);
}
add_action('init', 'bluewave_register_realisations_cpt');

// Taxonomie: Categories de projets
function bluewave_register_realisation_category_taxonomy() {
    $labels = array(
        'name'              => 'Categories',
        'singular_name'     => 'Categorie',
        'search_items'      => 'Rechercher une categorie',
        'all_items'         => 'Toutes les categories',
        'edit_item'         => 'Modifier la categorie',
        'update_item'       => 'Mettre a jour la categorie',
        'add_new_item'      => 'Ajouter une categorie',
        'new_item_name'     => 'Nouvelle categorie',
        'menu_name'         => 'Categories',
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'categorie-realisation'),
        'show_in_rest'      => true,
        // WPGraphQL support
        'show_in_graphql'   => true,
        'graphql_single_name' => 'realisationCategory',
        'graphql_plural_name' => 'realisationCategories',
    );

    register_taxonomy('realisation_category', array('realisation'), $args);
}
add_action('init', 'bluewave_register_realisation_category_taxonomy');

// Champs personnalises ACF (si ACF est installe)
// Sinon, utiliser les custom fields natifs WordPress
function bluewave_register_realisation_acf_fields() {
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    acf_add_local_field_group(array(
        'key' => 'group_realisation_details',
        'title' => 'Details du projet',
        'fields' => array(
            array(
                'key' => 'field_realisation_url',
                'label' => 'URL du site',
                'name' => 'project_url',
                'type' => 'url',
                'instructions' => 'Lien vers le site en production',
                'required' => 0,
                'show_in_graphql' => true,
            ),
            array(
                'key' => 'field_realisation_technologies',
                'label' => 'Technologies',
                'name' => 'technologies',
                'type' => 'text',
                'instructions' => 'Liste des technologies separees par des virgules (ex: Next.js, React, WordPress)',
                'required' => 0,
                'show_in_graphql' => true,
            ),
            array(
                'key' => 'field_realisation_features',
                'label' => 'Fonctionnalites',
                'name' => 'features',
                'type' => 'textarea',
                'instructions' => 'Une fonctionnalite par ligne',
                'required' => 0,
                'new_lines' => 'br',
                'show_in_graphql' => true,
            ),
            array(
                'key' => 'field_realisation_results',
                'label' => 'Resultats',
                'name' => 'results',
                'type' => 'textarea',
                'instructions' => 'Un resultat par ligne',
                'required' => 0,
                'new_lines' => 'br',
                'show_in_graphql' => true,
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'realisation',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'show_in_graphql' => true,
        'graphql_field_name' => 'projectDetails',
    ));
}
add_action('acf/init', 'bluewave_register_realisation_acf_fields');

// Alternative sans ACF: Enregistrer les meta fields pour GraphQL
function bluewave_register_realisation_meta_fields() {
    // URL du projet
    register_post_meta('realisation', 'project_url', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
        'auth_callback' => function() {
            return current_user_can('edit_posts');
        }
    ));

    // Technologies
    register_post_meta('realisation', 'technologies', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
        'auth_callback' => function() {
            return current_user_can('edit_posts');
        }
    ));

    // Fonctionnalites
    register_post_meta('realisation', 'features', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
        'auth_callback' => function() {
            return current_user_can('edit_posts');
        }
    ));

    // Resultats
    register_post_meta('realisation', 'results', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
        'auth_callback' => function() {
            return current_user_can('edit_posts');
        }
    ));
}
add_action('init', 'bluewave_register_realisation_meta_fields');

// Exposer les meta fields dans GraphQL (sans ACF)
function bluewave_register_graphql_realisation_fields() {
    // URL du projet
    register_graphql_field('Realisation', 'projectUrl', array(
        'type' => 'String',
        'description' => 'URL du site en production',
        'resolve' => function($post) {
            return get_post_meta($post->ID, 'project_url', true);
        }
    ));

    // Technologies
    register_graphql_field('Realisation', 'technologies', array(
        'type' => 'String',
        'description' => 'Technologies utilisees (separees par virgules)',
        'resolve' => function($post) {
            return get_post_meta($post->ID, 'technologies', true);
        }
    ));

    // Fonctionnalites
    register_graphql_field('Realisation', 'features', array(
        'type' => 'String',
        'description' => 'Liste des fonctionnalites (une par ligne)',
        'resolve' => function($post) {
            return get_post_meta($post->ID, 'features', true);
        }
    ));

    // Resultats
    register_graphql_field('Realisation', 'results', array(
        'type' => 'String',
        'description' => 'Liste des resultats (un par ligne)',
        'resolve' => function($post) {
            return get_post_meta($post->ID, 'results', true);
        }
    ));
}
add_action('graphql_register_types', 'bluewave_register_graphql_realisation_fields');

// Ajouter la metabox pour les champs custom (sans ACF)
function bluewave_add_realisation_metabox() {
    add_meta_box(
        'realisation_details',
        'Details du projet',
        'bluewave_realisation_metabox_callback',
        'realisation',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'bluewave_add_realisation_metabox');

function bluewave_realisation_metabox_callback($post) {
    wp_nonce_field('bluewave_realisation_nonce', 'realisation_nonce');

    $project_url = get_post_meta($post->ID, 'project_url', true);
    $technologies = get_post_meta($post->ID, 'technologies', true);
    $features = get_post_meta($post->ID, 'features', true);
    $results = get_post_meta($post->ID, 'results', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="project_url">URL du site</label></th>
            <td>
                <input type="url" id="project_url" name="project_url" value="<?php echo esc_url($project_url); ?>" class="regular-text" />
                <p class="description">Lien vers le site en production</p>
            </td>
        </tr>
        <tr>
            <th><label for="technologies">Technologies</label></th>
            <td>
                <input type="text" id="technologies" name="technologies" value="<?php echo esc_attr($technologies); ?>" class="large-text" />
                <p class="description">Liste separee par des virgules (ex: Next.js, React, WordPress)</p>
            </td>
        </tr>
        <tr>
            <th><label for="features">Fonctionnalites</label></th>
            <td>
                <textarea id="features" name="features" rows="5" class="large-text"><?php echo esc_textarea($features); ?></textarea>
                <p class="description">Une fonctionnalite par ligne</p>
            </td>
        </tr>
        <tr>
            <th><label for="results">Resultats</label></th>
            <td>
                <textarea id="results" name="results" rows="3" class="large-text"><?php echo esc_textarea($results); ?></textarea>
                <p class="description">Un resultat par ligne</p>
            </td>
        </tr>
    </table>
    <?php
}

function bluewave_save_realisation_meta($post_id) {
    if (!isset($_POST['realisation_nonce']) || !wp_verify_nonce($_POST['realisation_nonce'], 'bluewave_realisation_nonce')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    $fields = array('project_url', 'technologies', 'features', 'results');

    foreach ($fields as $field) {
        if (isset($_POST[$field])) {
            update_post_meta($post_id, $field, sanitize_textarea_field($_POST[$field]));
        }
    }
}
add_action('save_post_realisation', 'bluewave_save_realisation_meta');
