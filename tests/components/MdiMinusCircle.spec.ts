
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMinusCircle from "../../src/components/MdiMinusCircle.vue";

test("MdiMinusCircle snapshot", () => {
  const wrapper = mount(MdiMinusCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
