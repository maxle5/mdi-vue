
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCash from "../../src/components/MdiCash.vue";

test("MdiCash snapshot", () => {
  const wrapper = mount(MdiCash, {});
  expect(wrapper.html()).toMatchSnapshot();
});
