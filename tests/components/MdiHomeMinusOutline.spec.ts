
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeMinusOutline from "../../src/components/MdiHomeMinusOutline.vue";

test("MdiHomeMinusOutline snapshot", () => {
  const wrapper = mount(MdiHomeMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
