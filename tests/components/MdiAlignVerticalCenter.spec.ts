
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlignVerticalCenter from "../../src/components/MdiAlignVerticalCenter.vue";

test("MdiAlignVerticalCenter snapshot", () => {
  const wrapper = mount(MdiAlignVerticalCenter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
