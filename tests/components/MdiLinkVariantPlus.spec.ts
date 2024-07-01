
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinkVariantPlus from "../../src/components/MdiLinkVariantPlus.vue";

test("MdiLinkVariantPlus snapshot", () => {
  const wrapper = mount(MdiLinkVariantPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
