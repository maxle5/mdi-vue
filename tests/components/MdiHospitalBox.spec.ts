
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHospitalBox from "../../src/components/MdiHospitalBox.vue";

test("MdiHospitalBox snapshot", () => {
  const wrapper = mount(MdiHospitalBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
