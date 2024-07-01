
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageAutoAdjust from "../../src/components/MdiImageAutoAdjust.vue";

test("MdiImageAutoAdjust snapshot", () => {
  const wrapper = mount(MdiImageAutoAdjust, {});
  expect(wrapper.html()).toMatchSnapshot();
});
