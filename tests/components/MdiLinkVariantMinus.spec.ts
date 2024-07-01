
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinkVariantMinus from "../../src/components/MdiLinkVariantMinus.vue";

test("MdiLinkVariantMinus snapshot", () => {
  const wrapper = mount(MdiLinkVariantMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
