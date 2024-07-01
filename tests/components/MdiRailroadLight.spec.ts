
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRailroadLight from "../../src/components/MdiRailroadLight.vue";

test("MdiRailroadLight snapshot", () => {
  const wrapper = mount(MdiRailroadLight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
