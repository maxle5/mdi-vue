
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageCheck from "../../src/components/MdiMessageCheck.vue";

test("MdiMessageCheck snapshot", () => {
  const wrapper = mount(MdiMessageCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
