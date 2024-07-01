
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleSlice1 from "../../src/components/MdiCircleSlice1.vue";

test("MdiCircleSlice1 snapshot", () => {
  const wrapper = mount(MdiCircleSlice1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
