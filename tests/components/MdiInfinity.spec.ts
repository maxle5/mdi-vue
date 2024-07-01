
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInfinity from "../../src/components/MdiInfinity.vue";

test("MdiInfinity snapshot", () => {
  const wrapper = mount(MdiInfinity, {});
  expect(wrapper.html()).toMatchSnapshot();
});
