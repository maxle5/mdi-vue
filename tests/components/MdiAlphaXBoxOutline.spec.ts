
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaXBoxOutline from "../../src/components/MdiAlphaXBoxOutline.vue";

test("MdiAlphaXBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaXBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
