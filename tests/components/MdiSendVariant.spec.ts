
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSendVariant from "../../src/components/MdiSendVariant.vue";

test("MdiSendVariant snapshot", () => {
  const wrapper = mount(MdiSendVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
