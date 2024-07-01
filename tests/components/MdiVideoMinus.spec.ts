
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoMinus from "../../src/components/MdiVideoMinus.vue";

test("MdiVideoMinus snapshot", () => {
  const wrapper = mount(MdiVideoMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
