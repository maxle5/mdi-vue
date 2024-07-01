
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWebCheck from "../../src/components/MdiWebCheck.vue";

test("MdiWebCheck snapshot", () => {
  const wrapper = mount(MdiWebCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
