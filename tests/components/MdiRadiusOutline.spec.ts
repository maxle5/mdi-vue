
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadiusOutline from "../../src/components/MdiRadiusOutline.vue";

test("MdiRadiusOutline snapshot", () => {
  const wrapper = mount(MdiRadiusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
