
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNoteHalfDotted from "../../src/components/MdiMusicNoteHalfDotted.vue";

test("MdiMusicNoteHalfDotted snapshot", () => {
  const wrapper = mount(MdiMusicNoteHalfDotted, {});
  expect(wrapper.html()).toMatchSnapshot();
});
