
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleSlice3 from "../../src/components/MdiCircleSlice3.vue";

test("MdiCircleSlice3 snapshot", () => {
  const wrapper = mount(MdiCircleSlice3, {});
  expect(wrapper.html()).toMatchSnapshot();
});
