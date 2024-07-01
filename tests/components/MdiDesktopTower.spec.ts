
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDesktopTower from "../../src/components/MdiDesktopTower.vue";

test("MdiDesktopTower snapshot", () => {
  const wrapper = mount(MdiDesktopTower, {});
  expect(wrapper.html()).toMatchSnapshot();
});
