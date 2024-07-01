
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRoadVariant from "../../src/components/MdiRoadVariant.vue";

test("MdiRoadVariant snapshot", () => {
  const wrapper = mount(MdiRoadVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
