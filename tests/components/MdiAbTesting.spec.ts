
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAbTesting from "../../src/components/MdiAbTesting.vue";

test("MdiAbTesting snapshot", () => {
  const wrapper = mount(MdiAbTesting, {});
  expect(wrapper.html()).toMatchSnapshot();
});
