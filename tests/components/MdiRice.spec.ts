
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRice from "../../src/components/MdiRice.vue";

test("MdiRice snapshot", () => {
  const wrapper = mount(MdiRice, {});
  expect(wrapper.html()).toMatchSnapshot();
});
