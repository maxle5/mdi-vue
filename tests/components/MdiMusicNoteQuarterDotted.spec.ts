
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNoteQuarterDotted from "../../src/components/MdiMusicNoteQuarterDotted.vue";

test("MdiMusicNoteQuarterDotted snapshot", () => {
  const wrapper = mount(MdiMusicNoteQuarterDotted, {});
  expect(wrapper.html()).toMatchSnapshot();
});
