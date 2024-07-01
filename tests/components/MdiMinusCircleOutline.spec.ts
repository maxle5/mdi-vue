
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMinusCircleOutline from "../../src/components/MdiMinusCircleOutline.vue";

test("MdiMinusCircleOutline snapshot", () => {
  const wrapper = mount(MdiMinusCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
