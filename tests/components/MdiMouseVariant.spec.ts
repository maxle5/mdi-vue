
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMouseVariant from "../../src/components/MdiMouseVariant.vue";

test("MdiMouseVariant snapshot", () => {
  const wrapper = mount(MdiMouseVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
