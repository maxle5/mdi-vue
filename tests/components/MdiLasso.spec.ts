
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLasso from "../../src/components/MdiLasso.vue";

test("MdiLasso snapshot", () => {
  const wrapper = mount(MdiLasso, {});
  expect(wrapper.html()).toMatchSnapshot();
});
