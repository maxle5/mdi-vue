
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicOff from "../../src/components/MdiMusicOff.vue";

test("MdiMusicOff snapshot", () => {
  const wrapper = mount(MdiMusicOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
