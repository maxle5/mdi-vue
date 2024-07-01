
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMotorbike from "../../src/components/MdiMotorbike.vue";

test("MdiMotorbike snapshot", () => {
  const wrapper = mount(MdiMotorbike, {});
  expect(wrapper.html()).toMatchSnapshot();
});
