
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWallpaper from "../../src/components/MdiWallpaper.vue";

test("MdiWallpaper snapshot", () => {
  const wrapper = mount(MdiWallpaper, {});
  expect(wrapper.html()).toMatchSnapshot();
});
