
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAbugidaThai from "../../src/components/MdiAbugidaThai.vue";

test("MdiAbugidaThai snapshot", () => {
  const wrapper = mount(MdiAbugidaThai, {});
  expect(wrapper.html()).toMatchSnapshot();
});
