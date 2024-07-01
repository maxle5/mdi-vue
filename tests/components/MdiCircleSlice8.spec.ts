
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleSlice8 from "../../src/components/MdiCircleSlice8.vue";

test("MdiCircleSlice8 snapshot", () => {
  const wrapper = mount(MdiCircleSlice8, {});
  expect(wrapper.html()).toMatchSnapshot();
});
