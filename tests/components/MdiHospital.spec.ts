
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHospital from "../../src/components/MdiHospital.vue";

test("MdiHospital snapshot", () => {
  const wrapper = mount(MdiHospital, {});
  expect(wrapper.html()).toMatchSnapshot();
});
