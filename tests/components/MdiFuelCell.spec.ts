
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFuelCell from "../../src/components/MdiFuelCell.vue";

test("MdiFuelCell snapshot", () => {
  const wrapper = mount(MdiFuelCell, {});
  expect(wrapper.html()).toMatchSnapshot();
});
