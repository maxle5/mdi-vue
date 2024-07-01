
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadiologyBox from "../../src/components/MdiRadiologyBox.vue";

test("MdiRadiologyBox snapshot", () => {
  const wrapper = mount(MdiRadiologyBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
