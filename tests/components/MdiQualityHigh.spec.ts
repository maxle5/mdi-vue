
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiQualityHigh from "../../src/components/MdiQualityHigh.vue";

test("MdiQualityHigh snapshot", () => {
  const wrapper = mount(MdiQualityHigh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
