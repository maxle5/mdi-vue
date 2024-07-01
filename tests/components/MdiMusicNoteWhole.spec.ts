
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNoteWhole from "../../src/components/MdiMusicNoteWhole.vue";

test("MdiMusicNoteWhole snapshot", () => {
  const wrapper = mount(MdiMusicNoteWhole, {});
  expect(wrapper.html()).toMatchSnapshot();
});
