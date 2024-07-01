
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindowClosedVariant from "../../src/components/MdiWindowClosedVariant.vue";

test("MdiWindowClosedVariant snapshot", () => {
  const wrapper = mount(MdiWindowClosedVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
