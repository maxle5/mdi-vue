
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWrapDisabled from "../../src/components/MdiWrapDisabled.vue";

test("MdiWrapDisabled snapshot", () => {
  const wrapper = mount(MdiWrapDisabled, {});
  expect(wrapper.html()).toMatchSnapshot();
});
