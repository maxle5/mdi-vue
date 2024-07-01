
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCrosshairs from "../../src/components/MdiCrosshairs.vue";

test("MdiCrosshairs snapshot", () => {
  const wrapper = mount(MdiCrosshairs, {});
  expect(wrapper.html()).toMatchSnapshot();
});
