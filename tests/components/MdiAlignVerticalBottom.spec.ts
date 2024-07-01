
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlignVerticalBottom from "../../src/components/MdiAlignVerticalBottom.vue";

test("MdiAlignVerticalBottom snapshot", () => {
  const wrapper = mount(MdiAlignVerticalBottom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
