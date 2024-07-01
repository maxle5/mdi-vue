
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaQBoxOutline from "../../src/components/MdiAlphaQBoxOutline.vue";

test("MdiAlphaQBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaQBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
