
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAllergy from "../../src/components/MdiAllergy.vue";

test("MdiAllergy snapshot", () => {
  const wrapper = mount(MdiAllergy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
