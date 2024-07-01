
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPercentBox from "../../src/components/MdiPercentBox.vue";

test("MdiPercentBox snapshot", () => {
  const wrapper = mount(MdiPercentBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
