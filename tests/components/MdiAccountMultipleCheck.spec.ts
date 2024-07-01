
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountMultipleCheck from "../../src/components/MdiAccountMultipleCheck.vue";

test("MdiAccountMultipleCheck snapshot", () => {
  const wrapper = mount(MdiAccountMultipleCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
