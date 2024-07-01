
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleSmall from "../../src/components/MdiCircleSmall.vue";

test("MdiCircleSmall snapshot", () => {
  const wrapper = mount(MdiCircleSmall, {});
  expect(wrapper.html()).toMatchSnapshot();
});
