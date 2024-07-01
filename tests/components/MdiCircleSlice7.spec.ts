
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleSlice7 from "../../src/components/MdiCircleSlice7.vue";

test("MdiCircleSlice7 snapshot", () => {
  const wrapper = mount(MdiCircleSlice7, {});
  expect(wrapper.html()).toMatchSnapshot();
});
