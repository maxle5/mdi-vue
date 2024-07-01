
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicBoxMultiple from "../../src/components/MdiMusicBoxMultiple.vue";

test("MdiMusicBoxMultiple snapshot", () => {
  const wrapper = mount(MdiMusicBoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
