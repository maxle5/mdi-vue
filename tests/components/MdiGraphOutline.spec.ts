
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGraphOutline from "../../src/components/MdiGraphOutline.vue";

test("MdiGraphOutline snapshot", () => {
  const wrapper = mount(MdiGraphOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
