
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRotateLeftVariant from "../../src/components/MdiRotateLeftVariant.vue";

test("MdiRotateLeftVariant snapshot", () => {
  const wrapper = mount(MdiRotateLeftVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
