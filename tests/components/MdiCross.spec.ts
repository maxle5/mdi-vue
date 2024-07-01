
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCross from "../../src/components/MdiCross.vue";

test("MdiCross snapshot", () => {
  const wrapper = mount(MdiCross, {});
  expect(wrapper.html()).toMatchSnapshot();
});
