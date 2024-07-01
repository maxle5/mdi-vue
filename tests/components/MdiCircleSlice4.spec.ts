
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleSlice4 from "../../src/components/MdiCircleSlice4.vue";

test("MdiCircleSlice4 snapshot", () => {
  const wrapper = mount(MdiCircleSlice4, {});
  expect(wrapper.html()).toMatchSnapshot();
});
