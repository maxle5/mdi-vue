
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadiologyBoxOutline from "../../src/components/MdiRadiologyBoxOutline.vue";

test("MdiRadiologyBoxOutline snapshot", () => {
  const wrapper = mount(MdiRadiologyBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
