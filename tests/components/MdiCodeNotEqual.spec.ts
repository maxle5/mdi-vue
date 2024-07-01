
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeNotEqual from "../../src/components/MdiCodeNotEqual.vue";

test("MdiCodeNotEqual snapshot", () => {
  const wrapper = mount(MdiCodeNotEqual, {});
  expect(wrapper.html()).toMatchSnapshot();
});
