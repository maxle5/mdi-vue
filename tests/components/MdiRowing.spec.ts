
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRowing from "../../src/components/MdiRowing.vue";

test("MdiRowing snapshot", () => {
  const wrapper = mount(MdiRowing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
