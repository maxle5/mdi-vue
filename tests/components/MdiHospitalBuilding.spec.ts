
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHospitalBuilding from "../../src/components/MdiHospitalBuilding.vue";

test("MdiHospitalBuilding snapshot", () => {
  const wrapper = mount(MdiHospitalBuilding, {});
  expect(wrapper.html()).toMatchSnapshot();
});
