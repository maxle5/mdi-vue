
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkMusicOutline from "../../src/components/MdiBookmarkMusicOutline.vue";

test("MdiBookmarkMusicOutline snapshot", () => {
  const wrapper = mount(MdiBookmarkMusicOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
