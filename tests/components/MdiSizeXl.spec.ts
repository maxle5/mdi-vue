
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSizeXl from "../../src/components/MdiSizeXl.vue";

test("MdiSizeXl snapshot", () => {
  const wrapper = mount(MdiSizeXl, {});
  expect(wrapper.html()).toMatchSnapshot();
});
