
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOfficeBuilding from "../../src/components/MdiOfficeBuilding.vue";

test("MdiOfficeBuilding snapshot", () => {
  const wrapper = mount(MdiOfficeBuilding, {});
  expect(wrapper.html()).toMatchSnapshot();
});
