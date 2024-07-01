
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookCheck from "../../src/components/MdiBookCheck.vue";

test("MdiBookCheck snapshot", () => {
  const wrapper = mount(MdiBookCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
