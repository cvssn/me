/********************************************************************
 *                                                                  *
 * ublock origin - uma extensão do navegador que bloqueia requests. *
 * copyright (c) 2019 - presente / raymond hill                     *
 *                                                                  *
 * esse programa é um software gratuito: você pode redistribuir     *
 * isso e/ou modificar isso por meio dos termos da licença gnu      *
 * general public                                                   *
 *                                                                  *
 * esse programa é distribuído na esperança de ser útil             *
 *                                                                  *
 * home: https://github.com/gorhill/ublock                          *
 ********************************************************************/

(function () {
    'use strict';

    const init = ( ) => {
        window.adsbygoogle = {
            loaded: true,

            push: function() {}
        };

        const phs = document.querySelectorAll('.adsbygoogle');
        const css = 'height: 1px !important; max-height: 1px !important; max-width: 1px !important; width: 1px !important;';

        for (let i = 0; i < phs.length; i++) {
            const id = `aswift_${i}`;

            if (document.querySelector(`iframe#${id}`) !== null) {
                continue;
            }

            const fr = document.createElement('iframe');
            fr.id = id;
            fr.style = css;

            const cfr = document.createElement('iframe');
            cfr.id = `google_ads_frame${i}`;

            fr.appendChild(cfr);
            phs[i].appendChild(fr);
        }
    };

    if (document.querySelectorAll('.adsbygoogle').length === 0 && document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', init, {
            once: true
        });
    } else {
        init();
    }
})();

/**
 * pagead2.googlesyndication.com/pagead/js/adsbygoogle.js,adsbygoogle-placeholder,adsbygoogleStatus,google_ad_channel,google_ad_client,google_ad_format,google_ad_frequency_hint,google_ad_height,google_ad_host,google_ad_host_channel,google_ad_modifications,google_ad_region,google_ad_resizable,google_ad_resize,google_ad_section,google_ad_semantic_area,google_ad_width,google_adbreak_test,google_ads_frame,google_ads_iframe,google_adtest,google_admob_interstitial_slot,google_admob_rewarded_slot,google_admob_ads_only,google-adsense-platform-account,google_adsense_settings,google_ama_config,google-ama-order-assurance,google_ama_settings,google_ama_state,google_apltlad,google_audio_sense,google-auto-placed-read-aloud-player-reserved,google_debug_params,google_full_width_responsive,google_full_width_responsive_allowed,google_image_requests,google_js_errors,google_js_reporting_queue,google_loader_features_used,google_llp,google_logging_queue,google_max_ad_content_rating,google_measure_js_timing,google_ml_rank,google_overlays,google_override_format,google_package,google_page_url,google_persistent_state_async,google_pgb_reactive,google_placement_id,google_prev_ad_formats_by_region,google_prev_ad_slotnames_by_region,google_reactive_ad_format,google_reactive_ads_global_state,google_resizing_height,google_resizing_width,google_responsive_auto_format,google_responsive_dummy_ad,google_responsive_formats,google_restrict_data_processing,google_rum_task_id_counter,google_safe_for_responsive_override,google_shadow_mode,google_srt,google_tag_for_under_age_of_consent,google_tag_origin,google_tag_partner,google_traffic_source,google_unique_id,googletag
 */