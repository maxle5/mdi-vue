
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookMusicOutline from "../../src/components/MdiBookMusicOutline.vue";

test("MdiBookMusicOutline snapshot", () => {
  const wrapper = mount(MdiBookMusicOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
