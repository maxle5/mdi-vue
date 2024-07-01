
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSurfing from "../../src/components/MdiSurfing.vue";

test("MdiSurfing snapshot", () => {
  const wrapper = mount(MdiSurfing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
