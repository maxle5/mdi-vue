
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNoteOffOutline from "../../src/components/MdiMusicNoteOffOutline.vue";

test("MdiMusicNoteOffOutline snapshot", () => {
  const wrapper = mount(MdiMusicNoteOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
