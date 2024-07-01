
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinkVariantRemove from "../../src/components/MdiLinkVariantRemove.vue";

test("MdiLinkVariantRemove snapshot", () => {
  const wrapper = mount(MdiLinkVariantRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
