
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleHalf from "../../src/components/MdiCircleHalf.vue";

test("MdiCircleHalf snapshot", () => {
  const wrapper = mount(MdiCircleHalf, {});
  expect(wrapper.html()).toMatchSnapshot();
});
