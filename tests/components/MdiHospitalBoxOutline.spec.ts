
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHospitalBoxOutline from "../../src/components/MdiHospitalBoxOutline.vue";

test("MdiHospitalBoxOutline snapshot", () => {
  const wrapper = mount(MdiHospitalBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
