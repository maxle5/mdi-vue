
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRepeatVariant from "../../src/components/MdiRepeatVariant.vue";

test("MdiRepeatVariant snapshot", () => {
  const wrapper = mount(MdiRepeatVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
