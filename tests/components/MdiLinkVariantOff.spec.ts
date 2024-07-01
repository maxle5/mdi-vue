
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinkVariantOff from "../../src/components/MdiLinkVariantOff.vue";

test("MdiLinkVariantOff snapshot", () => {
  const wrapper = mount(MdiLinkVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
