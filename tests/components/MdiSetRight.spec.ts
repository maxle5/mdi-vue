
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSetRight from "../../src/components/MdiSetRight.vue";

test("MdiSetRight snapshot", () => {
  const wrapper = mount(MdiSetRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
