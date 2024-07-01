
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileRotateLeft from "../../src/components/MdiFileRotateLeft.vue";

test("MdiFileRotateLeft snapshot", () => {
  const wrapper = mount(MdiFileRotateLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
