
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicBoxMultipleOutline from "../../src/components/MdiMusicBoxMultipleOutline.vue";

test("MdiMusicBoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiMusicBoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
