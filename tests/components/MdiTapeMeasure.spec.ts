
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTapeMeasure from "../../src/components/MdiTapeMeasure.vue";

test("MdiTapeMeasure snapshot", () => {
  const wrapper = mount(MdiTapeMeasure, {});
  expect(wrapper.html()).toMatchSnapshot();
});
