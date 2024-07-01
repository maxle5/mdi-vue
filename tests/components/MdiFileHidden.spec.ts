
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileHidden from "../../src/components/MdiFileHidden.vue";

test("MdiFileHidden snapshot", () => {
  const wrapper = mount(MdiFileHidden, {});
  expect(wrapper.html()).toMatchSnapshot();
});
