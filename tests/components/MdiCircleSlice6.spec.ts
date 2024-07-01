
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleSlice6 from "../../src/components/MdiCircleSlice6.vue";

test("MdiCircleSlice6 snapshot", () => {
  const wrapper = mount(MdiCircleSlice6, {});
  expect(wrapper.html()).toMatchSnapshot();
});
