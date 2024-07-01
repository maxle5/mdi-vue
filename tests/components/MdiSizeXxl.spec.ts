
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSizeXxl from "../../src/components/MdiSizeXxl.vue";

test("MdiSizeXxl snapshot", () => {
  const wrapper = mount(MdiSizeXxl, {});
  expect(wrapper.html()).toMatchSnapshot();
});
