
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapCheck from "../../src/components/MdiMapCheck.vue";

test("MdiMapCheck snapshot", () => {
  const wrapper = mount(MdiMapCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
