
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShippingPallet from "../../src/components/MdiShippingPallet.vue";

test("MdiShippingPallet snapshot", () => {
  const wrapper = mount(MdiShippingPallet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
