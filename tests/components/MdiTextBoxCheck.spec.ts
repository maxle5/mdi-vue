
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextBoxCheck from "../../src/components/MdiTextBoxCheck.vue";

test("MdiTextBoxCheck snapshot", () => {
  const wrapper = mount(MdiTextBoxCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
