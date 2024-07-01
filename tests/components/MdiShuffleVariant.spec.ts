
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShuffleVariant from "../../src/components/MdiShuffleVariant.vue";

test("MdiShuffleVariant snapshot", () => {
  const wrapper = mount(MdiShuffleVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
