
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountCash from "../../src/components/MdiAccountCash.vue";

test("MdiAccountCash snapshot", () => {
  const wrapper = mount(MdiAccountCash, {});
  expect(wrapper.html()).toMatchSnapshot();
});
