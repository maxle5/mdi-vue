
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountChild from "../../src/components/MdiAccountChild.vue";

test("MdiAccountChild snapshot", () => {
  const wrapper = mount(MdiAccountChild, {});
  expect(wrapper.html()).toMatchSnapshot();
});
