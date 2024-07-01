
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMenuLeft from "../../src/components/MdiMenuLeft.vue";

test("MdiMenuLeft snapshot", () => {
  const wrapper = mount(MdiMenuLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
