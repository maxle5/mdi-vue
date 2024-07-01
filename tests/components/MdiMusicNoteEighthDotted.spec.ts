
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNoteEighthDotted from "../../src/components/MdiMusicNoteEighthDotted.vue";

test("MdiMusicNoteEighthDotted snapshot", () => {
  const wrapper = mount(MdiMusicNoteEighthDotted, {});
  expect(wrapper.html()).toMatchSnapshot();
});
