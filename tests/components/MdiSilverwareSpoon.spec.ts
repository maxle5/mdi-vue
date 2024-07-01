
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSilverwareSpoon from "../../src/components/MdiSilverwareSpoon.vue";

test("MdiSilverwareSpoon snapshot", () => {
  const wrapper = mount(MdiSilverwareSpoon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
