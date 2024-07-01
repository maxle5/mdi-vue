
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotEqual from "../../src/components/MdiNotEqual.vue";

test("MdiNotEqual snapshot", () => {
  const wrapper = mount(MdiNotEqual, {});
  expect(wrapper.html()).toMatchSnapshot();
});
