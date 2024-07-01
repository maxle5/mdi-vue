
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNoteOff from "../../src/components/MdiMusicNoteOff.vue";

test("MdiMusicNoteOff snapshot", () => {
  const wrapper = mount(MdiMusicNoteOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
