
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSendVariantClock from "../../src/components/MdiSendVariantClock.vue";

test("MdiSendVariantClock snapshot", () => {
  const wrapper = mount(MdiSendVariantClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
