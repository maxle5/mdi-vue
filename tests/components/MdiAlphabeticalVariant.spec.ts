
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphabeticalVariant from "../../src/components/MdiAlphabeticalVariant.vue";

test("MdiAlphabeticalVariant snapshot", () => {
  const wrapper = mount(MdiAlphabeticalVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
