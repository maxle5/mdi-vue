
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNoteHalf from "../../src/components/MdiMusicNoteHalf.vue";

test("MdiMusicNoteHalf snapshot", () => {
  const wrapper = mount(MdiMusicNoteHalf, {});
  expect(wrapper.html()).toMatchSnapshot();
});
