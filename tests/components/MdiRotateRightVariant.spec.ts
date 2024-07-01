
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRotateRightVariant from "../../src/components/MdiRotateRightVariant.vue";

test("MdiRotateRightVariant snapshot", () => {
  const wrapper = mount(MdiRotateRightVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
