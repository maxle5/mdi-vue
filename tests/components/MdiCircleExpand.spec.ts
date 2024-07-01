
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCircleExpand from "../../src/components/MdiCircleExpand.vue";

test("MdiCircleExpand snapshot", () => {
  const wrapper = mount(MdiCircleExpand, {});
  expect(wrapper.html()).toMatchSnapshot();
});
