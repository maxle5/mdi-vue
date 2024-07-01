
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCashSync from "../../src/components/MdiCashSync.vue";

test("MdiCashSync snapshot", () => {
  const wrapper = mount(MdiCashSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
