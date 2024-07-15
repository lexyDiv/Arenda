/* eslint-disable react/prop-types */
/* eslint-disable quotes */
const React = require('react');
const Layout = require("./Layout");

function Wc({ title }) {
  return (
    <Layout title={title}>

      <canvas id="canvas" width="900" height="700" />
      <canvas id="canvas2" width="900" height="700" />
      <canvas id="canvas3" width="900" height="700" />

      <script defer src="scripts/script_1.js" />
      <script defer src="scripts/images.js" />

      <script defer src="scripts/constructors/Title.js" />
      <script defer src="scripts/constructors/Radar.js" />
      <script defer src="scripts/constructors/Panick.js" />
      <script defer src="scripts/constructors/Alarm.js" />
      <script defer src="scripts/constructors/Axes.js" />
      <script defer src="scripts/constructors/ClickSave.js" />
      <script defer src="scripts/constructors/Obj.js" />
      <script defer src="scripts/constructors/Strike.js" />
      <script defer src="scripts/constructors/Fraction.js" />
      <script defer src="scripts/constructors/II_Attack.js" />
      <script defer src="scripts/constructors/Water_sled.js" />
      <script defer src="scripts/constructors/ShablonObj.js" />
      <script defer src="scripts/constructors/LandObj.js" />

      <script defer src="scripts/landObj/check_steny.js" />
      <script defer src="scripts/landObj/check_gory.js" />
      <script defer src="scripts/landObj/player_pro_draw.js" />
      <script defer src="scripts/landObj/extreamGetOutCell.js" />
      <script defer src="scripts/landObj/player_pro_building_position.js" />
      <script defer src="scripts/landObj/getOutCell.js" />
      <script defer src="scripts/landObj/draw.js" />
      <script defer src="scripts/landObj/drawTrups.js" />
      <script defer src="scripts/landObj/prog.js" />

      <script defer src="scripts/constructors/DragoonDamage.js" />
      <script defer src="scripts/constructors/Unit.js" />
      <script defer src="scripts/constructors/extendsUnit/peon.js" />

      <script defer src="scripts/unit/extends/peon/personalProg.js" />
      <script defer src="scripts/unit/extends/swordMan/personalProg.js" />
      <script defer src="scripts/unit/extends/mag/personalProg.js" />
      <script defer src="scripts/unit/extends/turtle/personalProg.js" />
      <script defer src="scripts/unit/extends/linkor/personalProg.js" />
      <script defer src="scripts/unit/extends/distroer/personalProg.js" />
      <script defer src="scripts/unit/extends/tanker/personalProg.js" />
      <script defer src="scripts/unit/extends/transport/personalProg.js" />
      <script defer src="scripts/unit/extends/dragoon/personalProg.js" />
      <script defer src="scripts/unit/extends/rizar/personalProg.js" />
      <script defer src="scripts/unit/extends/ballista/personalProg.js" />
      <script defer src="scripts/unit/extends/elf/personalProg.js" />

      <script defer src="scripts/constructors/Continent.js" />
      <script defer src="scripts/constructors/Sound.js" />
      <script defer src="scripts/constructors/Sea.js" />
      <script defer src="scripts/var.js" />

      <script defer src="scripts/sound/prog_sound_menu.js" />
      <script defer src="scripts/sound/prog_fight.js" />
      <script defer src="scripts/sound/prog.js" />
      <script defer src="scripts/sound/select_sound_fly.js" />
      <script defer src="scripts/sound/select_sound_fight.js" />
      <script defer src="scripts/sound/select_sound.js" />

      <script defer src="scripts/get_map.js" />

      <script defer src="scripts/process_functions/global_obnul.js" />
      <script defer src="scripts/process_functions/global_zanaves_prog_draw.js" />
      <script defer src="scripts/process_functions/restart_map_prog.js" />
      <script defer src="scripts/process_functions/click_to_iden_prog.js" />
      <script defer src="scripts/process_functions/mem_prog.js" />
      <script defer src="scripts/process_functions/mem_prog_load.js" />
      <script defer src="scripts/process_functions/music_prog.js" />
      <script defer src="scripts/process_functions/create_level.js" />
      <script defer src="scripts/process_functions/game_music_control.js" />
      <script defer src="scripts/new_func.js" />

      <script defer src="scripts/title_menu/do_start_draw.js" />
      <script defer src="scripts/title_menu/title/prog_draw.js" />
      <script defer src="scripts/title_menu/click_key_prog.js" />
      <script defer src="scripts/title_menu/menu_cursor_draw.js" />
      <script defer src="scripts/title_menu/type_3_order.js" />
      <script defer src="scripts/title_menu/title/list_5_prog.js" />
      <script defer src="scripts/title_menu/title/get_text.js" />
      <script defer src="scripts/title_menu/title/create_kick_start.js" />
      <script defer src="scripts/title_menu/title/strel_punkts.js" />
      <script defer src="scripts/title_menu/strel_draw.js" />
      <script defer src="scripts/title_menu/strel_prog.js" />
      <script defer src="scripts/title_menu/kaskad_prog.js" />
      <script defer src="scripts/title_menu/title/re_subjects.js" />
      <script defer src="scripts/title_menu/maps_txt_draw.js" />
      <script defer src="scripts/title_menu/exit.js" />
      <script defer src="scripts/title_menu/menu_litera.js" />
      <script defer src="scripts/main_menu.js" />
      <script defer src="scripts/menu_push_2.js" />
      <script defer src="scripts/levels.js" />

      <script defer src="scripts/soundControl.js" />
      <script defer src="scripts/landObj.js" />

      <script defer src="scripts/map/map_initialisation.js" />
      <script defer src="scripts/map/water_initialisation.js" />
      <script defer src="scripts/map/check_continents.js" />
      <script defer src="scripts/map/check_seas.js" />
      <script defer src="scripts/mapInit.js" />

      <script defer src="scripts/landObj/buildings/buildingBornAnimysUpdate.js" />
      <script defer src="scripts/shablon/contaktCellsGetVektors.js" />
      <script defer src="scripts/landObj/vossal_contacts_moveVectorsInitialization.js" />
      <script defer src="scripts/shablonLand.js" />
      <script defer src="scripts/unit/cellUpdate.js" />
      <script defer src="scripts/fractionsCreate.js" />

      <script defer src="scripts/obj/progCenterDrawPoint.js" />
      <script defer src="scripts/obj/drawSpecial.js" />
      <script defer src="scripts/obj/drawWater.js" />
      <script defer src="scripts/obj/draw2.js" />
      <script defer src="scripts/obj/draw.js" />
      <script defer src="scripts/obj/drawRadar.js" />
      <script defer src="scripts/obj/getVektors_ii.js" />
      <script defer src="scripts/obj/getVektorsSweeme.js" />
      <script defer src="scripts/obj/getVektors.js" />
      <script defer src="scripts/obj/myWay.js" />
      <script defer src="scripts/obj/getH.js" />
      <script defer src="scripts/objProto.js" />
      <script defer src="scripts/landObjProto.js" />

      <script defer src="scripts/unit/createBuilding.js" />
      <script defer src="scripts/unit/good_cell_for_ship.js" />
      <script defer src="scripts/unit/getBuildPosition.js" />
      <script defer src="scripts/unit/getGsp_Vsp.js" />
      <script defer src="scripts/unit/goWay.js" />
      <script defer src="scripts/unit/goWayDrag.js" />
      <script defer src="scripts/unit/goWaySweeme.js" />
      <script defer src="scripts/unit/cleared_way.js" />
      <script defer src="scripts/unit/cleared_way_ground.js" />
      <script defer src="scripts/unit/sea_panick.js" />
      <script defer src="scripts/unit/ground_panick.js" />
      <script defer src="scripts/unit/checkNextDragCell.js" />
      <script defer src="scripts/unit/checkNextSweemeCell.js" />
      <script defer src="scripts/unit/magick_ok.js" />
      <script defer src="scripts/unit/panick_peoples.js" />
      <script defer src="scripts/unit/getMy_landing_cell.js" />
      <script defer src="scripts/unit/checkGoodLandingCell.js" />
      <script defer src="scripts/unit/checkAntyMoveVektors.js" />
      <script defer src="scripts/unit/drawFly.js" />
      <script defer src="scripts/unit/myTargetCheck.js" />
      <script defer src="scripts/unit/checkGetTarget_sweeme.js" />
      <script defer src="scripts/unit/checkGetTarget.js" />
      <script defer src="scripts/unit/checkGetHandTarget_sweeme.js" />
      <script defer src="scripts/unit/checkGetHandTarget.js" />
      <script defer src="scripts/unit/checkValideTarget.js" />
      <script defer src="scripts/unit/getWayToTargetAndCheckGetting.js" />
      <script defer src="scripts/unit/isBlockedShip.js" />
      <script defer src="scripts/unit/isBlockedDrag.js" />
      <script defer src="scripts/unit/checkValideFreeCell.js" />
      <script defer src="scripts/unit/getOptimalContaktCell.js" />
      <script defer src="scripts/unit/updateSpeed.js" />
      <script defer src="scripts/unit/getTownH_or_Lesopilka.js" />
      <script defer src="scripts/unit/getFightVector.js" />
      <script defer src="scripts/unit/peonGo.js" />
      <script defer src="scripts/unit/getFirePoint.js" />
      <script defer src="scripts/unit/axeInitialisation.js" />
      <script defer src="scripts/unit/comeWithMee.js" />

      <script defer src="scripts/unitProto.js" />

      <script defer src="scripts/dragoonDamage/drawDragDem.js" />
      <script defer src="scripts/dragoonDamage/prog.js" />

      <script defer src="scripts/dragoonDamageProto.js" />
      <script defer src="scripts/unit/drawUnit.js" />
      <script defer src="scripts/removeControl.js" />
      <script defer src="scripts/canvas3.js" />
      <script defer src="scripts/getActiveZone.js" />
      <script defer src="scripts/drawMouseZone.js" />
      <script defer src="scripts/getGoodSweemeCell.js" />
      <script defer src="scripts/getSweemeGroopPosition.js" />
      <script defer src="scripts/dragoonsGroopPosition.js" />
      <script defer src="scripts/getMyGroupPosition.js" />
      <script defer src="scripts/window.js" />
      <script defer src="scripts/radar/radarProto.js" />
      <script defer src="scripts/unit/menu/createUnitDopMenu.js" />
      <script defer src="scripts/player/playerGroopProg.js" />
      <script defer src="scripts/player/playerGroupDraw.js" />
      <script defer src="scripts/unit/menu/unitDopMenuControl.js" />
      <script defer src="scripts/unit/menu/unitMenuDraw.js" />
      <script defer src="scripts/unit/menu/unitMenu.js" />
      <script defer src="scripts/infoGamePanel.js" />
      <script defer src="scripts/setInterval.js" />
      <script defer src="scripts/player/playerSelectControl.js" />
      <script defer src="scripts/getWay.js" />
      <script defer src="scripts/getBastH.js" />
      <script defer src="scripts/getBastVectors.js" />
      <script defer src="scripts/fraction/unitsUpdate.js" />
      <script defer src="scripts/fraction/ii_panick.js" />
      <script defer src="scripts/fraction/ii_attack.js" />
      <script defer src="scripts/fraction/attack_revers.js" />
      <script defer src="scripts/fraction/ii_oil_control.js" />
      <script defer src="scripts/fraction/check_resurs.js" />
      <script defer src="scripts/fraction/peon_managmant.js" />
      <script defer src="scripts/fraction/check_create_shablon.js" />
      <script defer src="scripts/fraction/createShablon_reposition.js" />
      <script defer src="scripts/fraction/dop_towers_control.js" />
      <script defer src="scripts/fraction/dragons_attack.js" />
      <script defer src="scripts/fraction/strike_control.js" />
      <script defer src="scripts/fraction/ii.js" />
      <script defer src="scripts/fraction/lesopilka.js" />
      <script defer src="scripts/fraction/kuznya.js" />
      <script defer src="scripts/fraction/foundry.js" />
      <script defer src="scripts/fraction/globalUpdate.js" />
      <script defer src="scripts/fraction/unit_dop_menu_create.js" />
      <script defer src="scripts/fraction/check_resurs_pro.js" />
      <script defer src="scripts/fraction/update_createShablon.js" />
      <script defer src="scripts/fraction/alarm_more_warriors.js" />
      <script defer src="scripts/fraction/checkAlarms_player.js" />
      <script defer src="scripts/fraction/checkAlarms.js" />
      <script defer src="scripts/fraction/check_end.js" />
      <script defer src="scripts/fractionProto.js" />
      <script defer src="scripts/fractionControl.js" />
      <script defer src="scripts/checkAlienSea.js" />
      <script defer src="scripts/checkAliens.js" />
      <script defer src="scripts/getDistanceOfLineyka.js" />

      <script defer src="scripts/unit/prog.js" />

      <script defer src="scripts/water_sled/prog.js" />
      <script defer src="scripts/water_sled/draw.js" />

      <script defer src="scripts/waterSledProto.js" />

      <script defer src="scripts/water_sled/functions/waterSledCreate.js" />
      <script defer src="scripts/infoAddControl.js" />
      <script defer src="scripts/goodSeaBuildCell.js" />
      <script defer src="scripts/landObj/buildings/wellCellForBuilding.js" />
      <script defer src="scripts/getMiniDistance.js" />
      <script defer src="scripts/activeFreeLandObjectsToProg.js" />
      <script defer src="scripts/isBlocked.js" />

      <script defer src="scripts/axes/draw.js" />
      <script defer src="scripts/axes/prog.js" />

      <script defer src="scripts/axesProto.js" />
      <script defer src="scripts/unitPrice.js" />
      <script defer src="scripts/myJobeTime.js" />
      <script defer src="scripts/hpGraf.js" />
      <script defer src="scripts/title_menu/pausaMenu.js" />
      <script defer src="scripts/inPausaMenu.js" />
      <script defer src="scripts/inPausaMenuObjInCreate.js" />
      <script defer src="scripts/drawAlarms.js" />

      <script defer src="scripts/basic.js" />

    </Layout>
  );
}

module.exports = Wc;
