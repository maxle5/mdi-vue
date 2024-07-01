
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDivingSnorkel from "../../src/components/MdiDivingSnorkel.vue";

test("MdiDivingSnorkel snapshot", () => {
  const wrapper = mount(MdiDivingSnorkel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
