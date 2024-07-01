
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileRotateRight from "../../src/components/MdiFileRotateRight.vue";

test("MdiFileRotateRight snapshot", () => {
  const wrapper = mount(MdiFileRotateRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
