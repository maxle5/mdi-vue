
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNoteOutline from "../../src/components/MdiMusicNoteOutline.vue";

test("MdiMusicNoteOutline snapshot", () => {
  const wrapper = mount(MdiMusicNoteOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
