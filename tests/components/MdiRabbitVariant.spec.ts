
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRabbitVariant from "../../src/components/MdiRabbitVariant.vue";

test("MdiRabbitVariant snapshot", () => {
  const wrapper = mount(MdiRabbitVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
