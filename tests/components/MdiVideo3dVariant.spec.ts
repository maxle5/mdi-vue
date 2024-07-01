
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideo3dVariant from "../../src/components/MdiVideo3dVariant.vue";

test("MdiVideo3dVariant snapshot", () => {
  const wrapper = mount(MdiVideo3dVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
