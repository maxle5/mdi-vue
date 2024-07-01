
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckboxIntermediateVariant from "../../src/components/MdiCheckboxIntermediateVariant.vue";

test("MdiCheckboxIntermediateVariant snapshot", () => {
  const wrapper = mount(MdiCheckboxIntermediateVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
