
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWallSconceFlatVariant from "../../src/components/MdiWallSconceFlatVariant.vue";

test("MdiWallSconceFlatVariant snapshot", () => {
  const wrapper = mount(MdiWallSconceFlatVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
