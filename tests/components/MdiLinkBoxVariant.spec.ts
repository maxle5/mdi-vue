
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinkBoxVariant from "../../src/components/MdiLinkBoxVariant.vue";

test("MdiLinkBoxVariant snapshot", () => {
  const wrapper = mount(MdiLinkBoxVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
