
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterCheck from "../../src/components/MdiFilterCheck.vue";

test("MdiFilterCheck snapshot", () => {
  const wrapper = mount(MdiFilterCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
