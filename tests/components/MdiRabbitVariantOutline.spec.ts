
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRabbitVariantOutline from "../../src/components/MdiRabbitVariantOutline.vue";

test("MdiRabbitVariantOutline snapshot", () => {
  const wrapper = mount(MdiRabbitVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
