
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookOpenPageVariant from "../../src/components/MdiBookOpenPageVariant.vue";

test("MdiBookOpenPageVariant snapshot", () => {
  const wrapper = mount(MdiBookOpenPageVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
