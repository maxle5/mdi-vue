
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeach from "../../src/components/MdiBeach.vue";

test("MdiBeach snapshot", () => {
  const wrapper = mount(MdiBeach, {});
  expect(wrapper.html()).toMatchSnapshot();
});
