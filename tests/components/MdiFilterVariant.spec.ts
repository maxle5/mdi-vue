
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterVariant from "../../src/components/MdiFilterVariant.vue";

test("MdiFilterVariant snapshot", () => {
  const wrapper = mount(MdiFilterVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
