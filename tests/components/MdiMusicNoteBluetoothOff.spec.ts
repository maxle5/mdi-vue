
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNoteBluetoothOff from "../../src/components/MdiMusicNoteBluetoothOff.vue";

test("MdiMusicNoteBluetoothOff snapshot", () => {
  const wrapper = mount(MdiMusicNoteBluetoothOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
