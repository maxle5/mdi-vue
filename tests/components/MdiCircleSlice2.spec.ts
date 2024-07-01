
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleSlice2 from "../../src/components/MdiCircleSlice2.vue";

test("MdiCircleSlice2 snapshot", () => {
  const wrapper = mount(MdiCircleSlice2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
