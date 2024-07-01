
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCylinder from "../../src/components/MdiCylinder.vue";

test("MdiCylinder snapshot", () => {
  const wrapper = mount(MdiCylinder, {});
  expect(wrapper.html()).toMatchSnapshot();
});
