
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNoteEighth from "../../src/components/MdiMusicNoteEighth.vue";

test("MdiMusicNoteEighth snapshot", () => {
  const wrapper = mount(MdiMusicNoteEighth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
