
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheck from "../../src/components/MdiCheck.vue";

test("MdiCheck snapshot", () => {
  const wrapper = mount(MdiCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
