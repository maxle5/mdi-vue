
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNoteQuarter from "../../src/components/MdiMusicNoteQuarter.vue";

test("MdiMusicNoteQuarter snapshot", () => {
  const wrapper = mount(MdiMusicNoteQuarter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
