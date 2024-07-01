
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEqual from "../../src/components/MdiEqual.vue";

test("MdiEqual snapshot", () => {
  const wrapper = mount(MdiEqual, {});
  expect(wrapper.html()).toMatchSnapshot();
});
