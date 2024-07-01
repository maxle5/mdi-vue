
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTargetVariant from "../../src/components/MdiTargetVariant.vue";

test("MdiTargetVariant snapshot", () => {
  const wrapper = mount(MdiTargetVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
