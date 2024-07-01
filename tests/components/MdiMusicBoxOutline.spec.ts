
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicBoxOutline from "../../src/components/MdiMusicBoxOutline.vue";

test("MdiMusicBoxOutline snapshot", () => {
  const wrapper = mount(MdiMusicBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
