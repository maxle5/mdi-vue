
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiServerOutline from "../../src/components/MdiServerOutline.vue";

test("MdiServerOutline snapshot", () => {
  const wrapper = mount(MdiServerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
