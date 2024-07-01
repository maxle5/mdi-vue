
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountSchool from "../../src/components/MdiAccountSchool.vue";

test("MdiAccountSchool snapshot", () => {
  const wrapper = mount(MdiAccountSchool, {});
  expect(wrapper.html()).toMatchSnapshot();
});
