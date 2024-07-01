
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlignHorizontalLeft from "../../src/components/MdiAlignHorizontalLeft.vue";

test("MdiAlignHorizontalLeft snapshot", () => {
  const wrapper = mount(MdiAlignHorizontalLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
