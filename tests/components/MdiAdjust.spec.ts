
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAdjust from "../../src/components/MdiAdjust.vue";

test("MdiAdjust snapshot", () => {
  const wrapper = mount(MdiAdjust, {});
  expect(wrapper.html()).toMatchSnapshot();
});
