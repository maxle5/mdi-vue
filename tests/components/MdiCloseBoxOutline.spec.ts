
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloseBoxOutline from "../../src/components/MdiCloseBoxOutline.vue";

test("MdiCloseBoxOutline snapshot", () => {
  const wrapper = mount(MdiCloseBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
