
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEraserVariant from "../../src/components/MdiEraserVariant.vue";

test("MdiEraserVariant snapshot", () => {
  const wrapper = mount(MdiEraserVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
