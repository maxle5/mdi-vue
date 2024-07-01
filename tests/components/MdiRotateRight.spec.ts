
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRotateRight from "../../src/components/MdiRotateRight.vue";

test("MdiRotateRight snapshot", () => {
  const wrapper = mount(MdiRotateRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
