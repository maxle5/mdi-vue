
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookOpenVariant from "../../src/components/MdiBookOpenVariant.vue";

test("MdiBookOpenVariant snapshot", () => {
  const wrapper = mount(MdiBookOpenVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
