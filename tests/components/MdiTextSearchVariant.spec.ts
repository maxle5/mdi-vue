
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextSearchVariant from "../../src/components/MdiTextSearchVariant.vue";

test("MdiTextSearchVariant snapshot", () => {
  const wrapper = mount(MdiTextSearchVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
