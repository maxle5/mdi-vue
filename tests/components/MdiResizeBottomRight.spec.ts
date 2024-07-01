
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiResizeBottomRight from "../../src/components/MdiResizeBottomRight.vue";

test("MdiResizeBottomRight snapshot", () => {
  const wrapper = mount(MdiResizeBottomRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
