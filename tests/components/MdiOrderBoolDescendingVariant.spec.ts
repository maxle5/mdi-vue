
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOrderBoolDescendingVariant from "../../src/components/MdiOrderBoolDescendingVariant.vue";

test("MdiOrderBoolDescendingVariant snapshot", () => {
  const wrapper = mount(MdiOrderBoolDescendingVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
