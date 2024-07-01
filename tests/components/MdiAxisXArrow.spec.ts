
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxisXArrow from "../../src/components/MdiAxisXArrow.vue";

test("MdiAxisXArrow snapshot", () => {
  const wrapper = mount(MdiAxisXArrow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
