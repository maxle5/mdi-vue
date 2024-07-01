
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOrderBoolAscendingVariant from "../../src/components/MdiOrderBoolAscendingVariant.vue";

test("MdiOrderBoolAscendingVariant snapshot", () => {
  const wrapper = mount(MdiOrderBoolAscendingVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
