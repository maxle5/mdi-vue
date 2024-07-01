
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicNote from "../../src/components/MdiMusicNote.vue";

test("MdiMusicNote snapshot", () => {
  const wrapper = mount(MdiMusicNote, {});
  expect(wrapper.html()).toMatchSnapshot();
});
