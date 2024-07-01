
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDesktopTowerMonitor from "../../src/components/MdiDesktopTowerMonitor.vue";

test("MdiDesktopTowerMonitor snapshot", () => {
  const wrapper = mount(MdiDesktopTowerMonitor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
