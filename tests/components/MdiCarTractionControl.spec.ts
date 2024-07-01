
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarTractionControl from "../../src/components/MdiCarTractionControl.vue";

test("MdiCarTractionControl snapshot", () => {
  const wrapper = mount(MdiCarTractionControl, {});
  expect(wrapper.html()).toMatchSnapshot();
});
