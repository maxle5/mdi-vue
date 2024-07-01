
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScaleBalance from "../../src/components/MdiScaleBalance.vue";

test("MdiScaleBalance snapshot", () => {
  const wrapper = mount(MdiScaleBalance, {});
  expect(wrapper.html()).toMatchSnapshot();
});
