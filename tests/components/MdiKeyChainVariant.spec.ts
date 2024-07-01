
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyChainVariant from "../../src/components/MdiKeyChainVariant.vue";

test("MdiKeyChainVariant snapshot", () => {
  const wrapper = mount(MdiKeyChainVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
