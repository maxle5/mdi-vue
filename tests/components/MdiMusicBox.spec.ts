
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicBox from "../../src/components/MdiMusicBox.vue";

test("MdiMusicBox snapshot", () => {
  const wrapper = mount(MdiMusicBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
