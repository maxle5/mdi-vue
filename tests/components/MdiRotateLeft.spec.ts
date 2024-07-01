
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRotateLeft from "../../src/components/MdiRotateLeft.vue";

test("MdiRotateLeft snapshot", () => {
  const wrapper = mount(MdiRotateLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
