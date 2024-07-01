
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBlockHelper from "../../src/components/MdiBlockHelper.vue";

test("MdiBlockHelper snapshot", () => {
  const wrapper = mount(MdiBlockHelper, {});
  expect(wrapper.html()).toMatchSnapshot();
});
