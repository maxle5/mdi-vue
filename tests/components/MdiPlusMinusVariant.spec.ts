
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlusMinusVariant from "../../src/components/MdiPlusMinusVariant.vue";

test("MdiPlusMinusVariant snapshot", () => {
  const wrapper = mount(MdiPlusMinusVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
