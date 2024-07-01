
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicClefBass from "../../src/components/MdiMusicClefBass.vue";

test("MdiMusicClefBass snapshot", () => {
  const wrapper = mount(MdiMusicClefBass, {});
  expect(wrapper.html()).toMatchSnapshot();
});
