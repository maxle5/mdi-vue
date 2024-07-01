
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatFloatCenter from "../../src/components/MdiFormatFloatCenter.vue";

test("MdiFormatFloatCenter snapshot", () => {
  const wrapper = mount(MdiFormatFloatCenter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
