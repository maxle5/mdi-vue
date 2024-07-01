
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSchool from "../../src/components/MdiSchool.vue";

test("MdiSchool snapshot", () => {
  const wrapper = mount(MdiSchool, {});
  expect(wrapper.html()).toMatchSnapshot();
});
