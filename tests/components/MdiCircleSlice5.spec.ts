
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleSlice5 from "../../src/components/MdiCircleSlice5.vue";

test("MdiCircleSlice5 snapshot", () => {
  const wrapper = mount(MdiCircleSlice5, {});
  expect(wrapper.html()).toMatchSnapshot();
});
