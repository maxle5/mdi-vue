
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeathStarVariant from "../../src/components/MdiDeathStarVariant.vue";

test("MdiDeathStarVariant snapshot", () => {
  const wrapper = mount(MdiDeathStarVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
